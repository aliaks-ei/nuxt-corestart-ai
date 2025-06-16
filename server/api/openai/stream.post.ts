import { createStreamingChatCompletion, type ChatMessage, type ChatOptions } from '~/server/utils/openai'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate request body
    if (!body.messages || !Array.isArray(body.messages)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Messages array is required'
      })
    }

    const messages: ChatMessage[] = body.messages
    const options: Omit<ChatOptions, 'stream'> = {
      temperature: body.temperature || 0.7,
      maxTokens: body.maxTokens || 1000,
    }

    // Validate temperature range
    if (options.temperature && (options.temperature < 0 || options.temperature > 2)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Temperature must be between 0 and 2'
      })
    }

    // Validate maxTokens range
    if (options.maxTokens && (options.maxTokens < 1 || options.maxTokens > 4000)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Max tokens must be between 1 and 4000'
      })
    }

    // Set headers for Server-Sent Events
    setHeader(event, 'Content-Type', 'text/event-stream')
    setHeader(event, 'Cache-Control', 'no-cache')
    setHeader(event, 'Connection', 'keep-alive')
    setHeader(event, 'Access-Control-Allow-Origin', '*')
    setHeader(event, 'Access-Control-Allow-Headers', 'Cache-Control')

    const stream = await createStreamingChatCompletion(messages, options)
    
    // Create a readable stream for the response
    const encoder = new TextEncoder()
    
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || ''
            
            if (content) {
              const data = JSON.stringify({ content, done: false })
              controller.enqueue(encoder.encode(`data: ${data}\n\n`))
            }
            
            // Check if the stream is finished
            if (chunk.choices[0]?.finish_reason) {
              const data = JSON.stringify({ content: '', done: true, finish_reason: chunk.choices[0].finish_reason })
              controller.enqueue(encoder.encode(`data: ${data}\n\n`))
              break
            }
          }
        } catch (error) {
          console.error('Streaming error:', error)
          const errorData = JSON.stringify({ error: 'Stream error occurred', done: true })
          controller.enqueue(encoder.encode(`data: ${errorData}\n\n`))
        } finally {
          controller.close()
        }
      }
    })

    return sendStream(event, readableStream)
    
  } catch (error: unknown) {
    console.error('OpenAI Streaming API Error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to process streaming chat request'
    const statusCode = (error as { statusCode?: number })?.statusCode || 500
    
    throw createError({
      statusCode,
      statusMessage: errorMessage
    })
  }
}) 
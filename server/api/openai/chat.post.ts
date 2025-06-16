import { createChatCompletion, type ChatMessage, type ChatOptions } from '~/server/utils/openai'

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
    const options: ChatOptions = {
      temperature: body.temperature || 0.7,
      maxTokens: body.maxTokens || 1000,
      stream: false
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

    const completion = await createChatCompletion(messages, options)
    
    // Type guard to ensure we have a non-streaming response
    if ('choices' in completion && 'usage' in completion) {
      return {
        success: true,
        data: {
          message: completion.choices[0]?.message?.content || '',
          usage: completion.usage
        }
      }
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: 'Unexpected response format from OpenAI'
      })
    }
  } catch (error: unknown) {
    console.error('OpenAI API Error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to process chat request'
    const statusCode = (error as { statusCode?: number })?.statusCode || 500
    
    throw createError({
      statusCode,
      statusMessage: errorMessage
    })
  }
}) 
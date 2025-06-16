import OpenAI from 'openai'

let openaiClient: OpenAI | null = null

export function getOpenAIClient() {
  if (!openaiClient) {
    const config = useRuntimeConfig()
    
    if (!config.openaiApiKey) {
      throw new Error('OpenAI API key is not configured')
    }

    openaiClient = new OpenAI({
      apiKey: config.openaiApiKey,
    })
  }

  return openaiClient
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface ChatOptions {
  temperature?: number
  maxTokens?: number
  stream?: boolean
}

export async function createChatCompletion(
  messages: ChatMessage[],
  options: ChatOptions = {}
) {
  const client = getOpenAIClient()
  
  const {
    temperature = 0.7,
    maxTokens = 1000,
    stream = false
  } = options

  return await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    temperature,
    max_tokens: maxTokens,
    stream,
  })
}

export async function createStreamingChatCompletion(
  messages: ChatMessage[],
  options: Omit<ChatOptions, 'stream'> = {}
) {
  const client = getOpenAIClient()
  
  const {
    temperature = 0.7,
    maxTokens = 1000,
  } = options

  return await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    temperature,
    max_tokens: maxTokens,
    stream: true,
  })
} 
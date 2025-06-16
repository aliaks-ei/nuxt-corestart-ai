export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface ChatOptions {
  temperature?: number
  maxTokens?: number
  stream?: boolean
}

export interface ChatRequest {
  messages: ChatMessage[]
  temperature?: number
  maxTokens?: number
}

export interface ChatResponse {
  success: boolean
  data: {
    message: string
    usage?: TokenUsage
  }
}

export interface StreamChunk {
  content: string
  done: boolean
  finish_reason?: string
  error?: string
}

export interface OpenAIError {
  statusCode: number
  statusMessage: string
}

export interface TokenUsage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
} 
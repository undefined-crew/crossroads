export interface CreateChatRequest {
  userId: string
  message: string
}

export interface CreateChatResponse {
  chatId: string
}

export interface GenerateSolutionRequest {
  prompt: string
}

export interface GenerateSolutionResponse {
  message: string
}

export interface ApiErrorResponse {
  error: string
}

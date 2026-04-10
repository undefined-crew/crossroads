import { CreateChatRequest, CreateChatResponse } from "../types/api"

export async function createChat(userId: string, message: string): Promise<CreateChatResponse> {
  const res = await fetch("/api/chat/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userId, message } satisfies CreateChatRequest)
  })
  const data = await res.json()
  return data as CreateChatResponse
}

import { connectDb } from "@/database/utils/db"
import { Chat } from "@/database/models/chat"
import type { CreateChatRequest, CreateChatResponse, ApiErrorResponse } from "@/lib/types/api"

export async function POST(req: Request): Promise<Response> {
  try {
    await connectDb()
    const body: CreateChatRequest = await req.json()
    const { userId, message } = body

    const chat = await Chat.create({ userId, messages: [{ role: "user", content: message }] })
    return Response.json({ chatId: chat._id } satisfies CreateChatResponse)
  } catch (_) {
    return Response.json({ error: "Failed to create chat" } satisfies ApiErrorResponse, { status: 500 })
  }
}

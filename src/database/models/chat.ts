import { Schema, model, models, HydratedDocument } from "mongoose"

export interface IChatMessage {
  role: "user" | "assistant"
  content: string
  createdAt: Date
}

export interface IChat {
  _id: string
  userId: string
  panels: string[]
  messages: IChatMessage[]
  createdAt: Date
  updatedAt: Date
}

export type IChatDocument = HydratedDocument<IChat>

const MessageSchema = new Schema<IChatMessage>({
  role: { type: String, enum: ["user", "assistant"], required: true },
  content: { type: String, required: true },
}, { timestamps: true })

const ChatSchema = new Schema<IChat>({
  _id: { type: String, default: () => crypto.randomUUID() },
  userId: { type: String, required: true },
  panels: [{ type: String }],
  messages: [MessageSchema],
}, { timestamps: true })

export const Chat = models.Chat ?? model<IChat>("Chat", ChatSchema)

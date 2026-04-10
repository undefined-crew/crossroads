import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI!

if (!MONGO_URI) throw new Error("MONGO_URI env is not defined")

declare global {
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
}

const cached = global._mongoose ?? (global._mongoose = { conn: null, promise: null })

export async function connectDb() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false })
  }

  try {
    cached.conn = await cached.promise

    if (process.env.NODE_ENV === "development") {
      console.log("mongodb connected")
    }
  } catch (err) {
    cached.promise = null
    const { message } = err as Error
    console.error("mongodb connection error:", message)
    throw err
  }

  return cached.conn
}

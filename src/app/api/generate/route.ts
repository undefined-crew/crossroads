import { GoogleGenAI, ThinkingLevel } from "@google/genai"

const apiKey = process.env.GEMINI_API_KEY

export async function POST(req: Request) {
  const { prompt } = await req.json() as { prompt: string }
  const ai = new GoogleGenAI({ apiKey })
  const model = "gemini-3-flash-preview"
  const response = await ai.models.generateContentStream({
    model,
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.HIGH
      }
    }
  })

  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const text = chunk.text
        controller.enqueue(new TextEncoder().encode(text))
      }
      controller.close()
    }
  })

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    status: 200
  })
}

import { GenerateSolutionRequest } from "@/lib/types/api"

export async function generateSolution(
  prompt: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt } satisfies GenerateSolutionRequest)
  })

  if (!res.body) throw new Error("No response body")

  const reader = res.body.getReader()
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    onChunk(decoder.decode(value, { stream: true }))
  }
}

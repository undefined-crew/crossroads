"use client"

import { generateSolution } from "@/lib/ai/generate"
import { useChatStore } from "@/lib/utils/store"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Chat() {
  const { chatId } = useParams<{ chatId: string }>()
  const { messages } = useChatStore()
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  useEffect(() => {
    const prompt = messages[0]?.content
    if (!prompt || hasFetched.current) return

    hasFetched.current = true

    async function generate() {
      setLoading(true)
      setError(null)
      try {
        await generateSolution(prompt, (chunk) => setOutput((prev) => prev + chunk))
      } catch (_) {
        setError("Failed to generate solution. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    generate()
  }, [messages])

  const renderMessages = () => {
    return messages.map(({ content }, i) => (
      <div key={i}>{content}</div>
    ))
  }

  return (
    <div style={{ padding: "2rem 2%" }}>
      <p>chatId: {chatId}</p>

      <div>
        {renderMessages()}
      </div>

      <div>
        {output}
        {loading && <span>▌</span>}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

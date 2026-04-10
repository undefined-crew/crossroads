import { create } from "zustand"
import { IChatMessage } from "@/database/models/chat"

interface ChatState {
  chatId: string | null
  messages: IChatMessage[]
  panels: string[]
  isGenerating: boolean
  initChat: (chatId: string, prompt: string) => void
  addMessage: (message: IChatMessage) => void
  addPanel: (url: string) => void
  setIsGenerating: (val: boolean) => void
  reset: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  chatId: null,
  messages: [],
  panels: [],
  isGenerating: false,
  initChat: (chatId, prompt) => set({
    chatId,
    messages: [{ role: "user", content: prompt, createdAt: new Date() }],
    panels: [],
    isGenerating: true,
  }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  addPanel: (url) => set((state) => ({ panels: [...state.panels, url] })),
  setIsGenerating: (val) => set({ isGenerating: val }),
  reset: () => set({ chatId: null, messages: [], panels: [], isGenerating: false }),
}))

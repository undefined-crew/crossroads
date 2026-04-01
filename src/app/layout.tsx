import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "@/styles/main/globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Crossroads - The Life Sandbox"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.className} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}

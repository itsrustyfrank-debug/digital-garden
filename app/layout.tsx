import type React from "react"
import type { Metadata } from "next"
import { Lora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Digital Garden — A Personal Encyclopedia",
  description: "A collection of thoughts, notes, and reference material organized for reading and reflection.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

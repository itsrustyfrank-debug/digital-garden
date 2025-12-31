import type React from "react"
import type { Metadata } from "next"
import { Carme as Charter, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const charter = Charter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
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
    <html lang="en" className={`${charter.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

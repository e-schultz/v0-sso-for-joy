import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FLOAT System Explorer",
  description: "Interactive interface for exploring the FLOAT conceptual framework",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-black text-pink-500 antialiased">{children}</body>
    </html>
  )
}


import './globals.css'
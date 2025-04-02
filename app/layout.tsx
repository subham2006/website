import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Subham Mitra | Portfolio",
  description: "Personal portfolio of Subham Mitra, EECS @ UC Berkeley",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
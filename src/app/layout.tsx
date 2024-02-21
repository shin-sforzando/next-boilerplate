import "@/app/globals.css"

import EnvIndicator from "@/components/ui/EnvIndicator"
import ModeToggle from "@/components/ui/ModeToggle"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import { AxiomWebVitals } from "next-axiom"

export const metadata: Metadata = {
  title: "next-boilerplate",
  description: "Template repository for Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AxiomWebVitals />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
          <EnvIndicator />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

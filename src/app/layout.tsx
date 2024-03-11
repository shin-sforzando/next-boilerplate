import EnvIndicator from "@/components/ui/EnvIndicator"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
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
    <html lang="en">
      <body>
        <AxiomWebVitals />
        {children}
        <EnvIndicator />
        <Analytics />
      </body>
    </html>
  )
}

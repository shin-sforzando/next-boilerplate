import "@mantine/core/styles.css"

import EnvIndicator from "@/components/ui/EnvIndicator"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <AxiomWebVitals />
        <MantineProvider>{children}</MantineProvider>
        <EnvIndicator />
        <Analytics />
      </body>
    </html>
  )
}

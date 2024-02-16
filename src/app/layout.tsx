import "@/app/globals.css"

import EnvIndicator from "@/components/ui/EnvIndicator"
import ModeToggle from "@/components/ui/ModeToggle"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { Metadata } from "next"

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
      </body>
    </html>
  )
}

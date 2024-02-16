import "@/app/globals.css"
import EnvIndicator from "@/components/ui/EnvIndicator"
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
    <html lang="en">
      <body>
        {children}
        <EnvIndicator />
      </body>
    </html>
  )
}

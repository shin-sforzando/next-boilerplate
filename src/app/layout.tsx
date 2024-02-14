import EnvIndicator from "@/app/components/EnvIndicator"
import { Providers } from "@/app/providers"
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
        <Providers>{children}</Providers>
        <EnvIndicator />
      </body>
    </html>
  )
}

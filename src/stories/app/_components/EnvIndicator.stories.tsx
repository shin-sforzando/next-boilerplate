import type { Meta, StoryObj } from "@storybook/react"

import EnvIndicator from "@/app/_components/EnvIndicator"
import { expect, within } from "@storybook/test"

const meta: Meta = {
  title: "app/_components/EnvIndicator",
  component: EnvIndicator,
  tags: ["autodocs"],
} satisfies Meta<typeof EnvIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const envIndicator = canvas.queryByTestId("EnvIndicator")
    if (process.env.NODE_ENV !== "production") {
      await expect(envIndicator).toBeInTheDocument()
      await expect(envIndicator).toHaveTextContent(process.env.NODE_ENV)
    } else {
      await expect(envIndicator).not.toBeInTheDocument()
    }
  },
}

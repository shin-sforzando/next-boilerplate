import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"

import Page from "@/app/page"

const meta = {
  title: "app/page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("src/app/page.tsx")).toHaveTextContent(
      "src/app/page.tsx",
    )
  },
}

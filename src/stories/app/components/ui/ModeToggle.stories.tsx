import ModeToggle from "@/components/ui/ModeToggle"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"

const meta = {
  title: "components/ui/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ModeToggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const modeToggle = await canvas.queryByTestId("ModeToggle")
    await expect(modeToggle).toBeInTheDocument()
    await userEvent.click(modeToggle)
  },
}

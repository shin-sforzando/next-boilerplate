import type { Meta, StoryObj } from "@storybook/react"

import EnvIndicator from "@/app/components/EnvIndicator"

const meta: Meta = {
  title: "app/components/EnvIndicator",
  component: EnvIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EnvIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

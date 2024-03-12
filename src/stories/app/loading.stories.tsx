import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"

import Loading from "@/app/loading"

const meta = {
  title: "app/loading",
  component: Loading,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

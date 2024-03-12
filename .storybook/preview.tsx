import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core"

import type { Preview } from "@storybook/react"
import React from "react"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
}

export default preview

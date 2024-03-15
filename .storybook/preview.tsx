import "@mantine/core/styles.css"

import { MantineProvider, useMantineColorScheme } from "@mantine/core"

import type { Preview } from "@storybook/react"
import React, { type ReactNode, useEffect } from "react"

function ColorSchemeWrapper({
  children,
  backgrounds,
}: Readonly<{ children: ReactNode; backgrounds?: { value: string } }>) {
  const { setColorScheme } = useMantineColorScheme()

  useEffect(() => {
    if (backgrounds) {
      const red = backgrounds.value.substring(1, 3)
      const green = backgrounds.value.substring(3, 5)
      const blue = backgrounds.value.substring(5, 7)
      const brightness =
        (Number.parseInt(red, 16) * 299 +
          Number.parseInt(green, 16) * 587 +
          Number.parseInt(blue, 16) * 114) /
        1000
      setColorScheme(128 <= brightness ? "light" : "dark")
    }
  }, [backgrounds, setColorScheme])

  return <>{children}</>
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <MantineProvider>
          <ColorSchemeWrapper backgrounds={context.globals.backgrounds}>
            <Story />
          </ColorSchemeWrapper>
        </MantineProvider>
      )
    },
  ],
}

export default preview

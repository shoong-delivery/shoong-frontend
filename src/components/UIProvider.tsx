import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
      fonts: {
        heading: {
          value: `'GMarketSans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
        },
        body: {
          value: `'GMarketSans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
        },
      },
      fontWeights: {
        normal: { value: 300 },
        medium: { value: 500 },
        bold: { value: 700 },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function UIProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}

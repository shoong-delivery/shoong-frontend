import type { ReactNode } from 'react'
import { Button, Text } from '@chakra-ui/react'

export function Row({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      width="100%"
      justifyContent="flex-start"
      p="16px 0"
      _active={{ transform: 'scale(0.98)' }}
      transition="transform 0.1s ease"
    >
      <Text textStyle="xl">{children}</Text>
    </Button>
  )
}

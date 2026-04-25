import { Box, Button } from '@chakra-ui/react'
import type { ComponentProps } from 'react'

export function FixedBottomCTA(props: ComponentProps<typeof Button>) {
  return (
    <Box position="fixed" bottom="0" left="0" right="0" p={4} zIndex={10}>
      <Button colorScheme="blue" width="full" size="xl" {...props} />
    </Box>
  )
}

import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Center, Text } from '@chakra-ui/react'
import { useTimeout } from 'react-simplikit'
import { Spacing } from '#/components/Spacing'
import { AnimationWrapper } from '#/components/AnimationWrapper'

export const Route = createFileRoute('/order-complete')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  useTimeout(() => {
    navigate({ to: '/home', replace: true })
  }, 3000)

  return (
    <>
      <Text textStyle="4xl">
        Shoong~
        <br />
        주문이 완료되었어요!
      </Text>
      <Spacing size={120} />
      <Center>
        <AnimationWrapper type="wave">
          <Text textStyle="6xl">🎉</Text>
        </AnimationWrapper>
      </Center>
    </>
  )
}

import { Spacing } from '#/components/Spacing'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Stack, Text } from '@chakra-ui/react'
import { userNameStorage } from '#/storages/userName'
import { Row } from '#/components/Row'

export const Route = createFileRoute('/home')({
  component: HomePage,
})

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <Text textStyle="4xl">
        {userNameStorage.get()}님,
        <br />
        반가워요 👋
      </Text>
      <Spacing size={20} />
      <Text textStyle="2xl">무엇을 하시겠어요?</Text>
      <Spacing size={40} />
      <Stack>
        <Row icon="🍚" onClick={() => navigate({ to: '/menu' })}>
          음식 주문
        </Row>
        <Row icon="🚚" onClick={() => navigate({ to: '/orders' })}>
          주문 조회
        </Row>
        <Row icon="🔔" onClick={() => navigate({ to: '/alarms' })}>
          알람 조회
        </Row>
      </Stack>
    </>
  )
}

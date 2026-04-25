import { createFileRoute } from '@tanstack/react-router'
import { Stack, Text } from '@chakra-ui/react'
import { Spacing } from '#/components/Spacing'
import { Row } from '#/components/Row'

export const Route = createFileRoute('/alarms')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Text textStyle="4xl">알림 조회</Text>
      <Spacing size={40} />
      <Stack>
        <Row>짬뽕을 기사님이 픽업하셨어요</Row>
        <Row>짬뽕을 주문했어요</Row>
        <Row>짜장면이 배달 완료 되었어요</Row>
        <Row>짬뽕을 기사님이 픽업하셨어요</Row>
        <Row>짬뽕을 음식점에서 준비 중이에요</Row>
      </Stack>
    </>
  )
}

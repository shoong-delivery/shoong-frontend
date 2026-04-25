import { Row } from '#/components/Row'
import { Spacing } from '#/components/Spacing'
import { Stack, Text } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Text textStyle="4xl">주문 조회</Text>
      <Spacing size={40} />
      <Stack>
        <Row>짬뽕 (조리 중)</Row>
        <Row>짜장면 (배달 완료)</Row>
        <Row>탕수육 (배달 중)</Row>
      </Stack>
    </>
  )
}

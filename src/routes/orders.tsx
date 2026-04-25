import { Row } from '#/components/Row'
import { Spacing } from '#/components/Spacing'
import { getOrdersQueryOptions } from '#/query-options/order'
import { Stack, Text } from '@chakra-ui/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createFileRoute('/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Text textStyle="4xl">🚚 주문 조회</Text>
      <Spacing size={40} />
      <Suspense>
        <OrderList />
      </Suspense>
    </>
  )
}

function OrderList() {
  const {
    data: { orders },
  } = useSuspenseQuery(getOrdersQueryOptions())

  return (
    <Stack>
      {orders.map((order) => (
        <Row icon="👉">
          {order.menu.name} ({order.status})
        </Row>
      ))}
    </Stack>
  )
}

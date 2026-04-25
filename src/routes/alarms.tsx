import { createFileRoute } from '@tanstack/react-router'
import { Stack, Text } from '@chakra-ui/react'
import { Spacing } from '#/components/Spacing'
import { Row } from '#/components/Row'
import { Suspense } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getAlaramsQueryOptions } from '#/query-options/alarm'

export const Route = createFileRoute('/alarms')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Text textStyle="4xl">알림 조회</Text>
      <Spacing size={40} />
      <Suspense>
        <AlarmList />
      </Suspense>
    </>
  )
}

function AlarmList() {
  const {
    data: { alarms },
  } = useSuspenseQuery(getAlaramsQueryOptions())

  return (
    <Stack>
      {alarms.map((alarm) => (
        <Row key={alarm.id}>{alarm.message}</Row>
      ))}
    </Stack>
  )
}

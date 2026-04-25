import { fetchAlarms } from '#/remotes/alarm'
import { queryOptions } from '@tanstack/react-query'

export const getAlaramsQueryOptions = () =>
  queryOptions({
    queryKey: ['fetchAlarms'],
    queryFn: () => fetchAlarms(),
  })

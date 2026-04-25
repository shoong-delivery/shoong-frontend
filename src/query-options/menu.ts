import { fetchMenu } from '#/remotes/menu'
import { queryOptions } from '@tanstack/react-query'

export const getMenuQueryOptions = () =>
  queryOptions({
    queryKey: ['fetchMenu'],
    queryFn: () => fetchMenu(),
  })

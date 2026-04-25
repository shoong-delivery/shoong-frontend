import { fetchOrders } from '#/remotes/order'
import { queryOptions } from '@tanstack/react-query'

export const getOrdersQueryOptions = () =>
  queryOptions({
    queryKey: ['fetchOrders'],
    queryFn: () => fetchOrders(),
  })

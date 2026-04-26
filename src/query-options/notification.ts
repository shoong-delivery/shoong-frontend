import { fetchNotifications } from '#/remotes/notification'
import { queryOptions } from '@tanstack/react-query'

export const getNotificationQueryOptions = () =>
  queryOptions({
    queryKey: ['fetchNotifications'],
    queryFn: () => fetchNotifications(),
  })

import { httpClient } from '#/utils/httpClient'

export const fetchNotifications = () => {
  return httpClient.get<{
    alarms: {
      id: string
      message: string
    }[]
  }>('/notify')
}

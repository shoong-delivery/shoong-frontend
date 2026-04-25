import { httpClient } from '#/utils/httpClient'

export const fetchAlarms = () => {
  return httpClient.get<{
    alarms: {
      id: string
      message: string
    }[]
  }>('/api/alarms')
}

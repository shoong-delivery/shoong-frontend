import type { Menu } from '#/models/menu'
import { httpClient } from '#/utils/httpClient'

export const orderMenu = ({ menuId }: { menuId: string }) => {
  return httpClient.post<void>(`/api/order/${menuId}`)
}

export const fetchOrders = () => {
  return httpClient.get<{
    orders: Array<{
      menu: Menu
      status:
        | '주문수락전'
        | '조리중'
        | '라이더배차완료'
        | '라이더픽업완료'
        | '배달완료'
    }>
  }>('/api/order')
}

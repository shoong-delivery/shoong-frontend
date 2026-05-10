import { http, HttpResponse } from 'msw'
import { BASE_URL } from '#/utils/httpClient'

// Mock data
const mockMenus = [
  { id: '1', name: '김치찌개' },
  { id: '2', name: '된장찌개' },
  { id: '3', name: '비빔밥' },
]

const mockAlarms = [
  { id: '1', message: '주문이 접수되었습니다.' },
  { id: '2', message: '배달이 시작되었습니다.' },
]

const mockOrders = [
  {
    menu: { id: '1', name: '김치찌개' },
    status: '조리중' as const,
  },
  {
    menu: { id: '2', name: '된장찌개' },
    status: '라이더배차완료' as const,
  },
]

// Define handlers for your API endpoints
export const handlers = [
  http.get(`${BASE_URL}/api/notifications/`, () => {
    return HttpResponse.json({
      alarms: mockAlarms,
    })
  }),

  http.get(`${BASE_URL}/api/orders/menu`, () => {
    return HttpResponse.json({
      menus: mockMenus,
    })
  }),

  http.post(`${BASE_URL}/api/orders/:menuId`, () => {
    return HttpResponse.json(null)
  }),

  http.get(`${BASE_URL}/api/orders/list`, () => {
    return HttpResponse.json({
      orders: mockOrders,
    })
  }),
]

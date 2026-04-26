import { http, HttpResponse } from 'msw'
import { BASE_URL } from '#/utils/httpClient'

// TODO: 임시 BASE_URL, 나중에 환경변수로 관리하기

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
  // GET /notify
  http.get(`${BASE_URL}/notify`, () => {
    return HttpResponse.json({
      alarms: mockAlarms,
    })
  }),

  // GET /order/menu
  http.get(`${BASE_URL}/order/menu`, () => {
    return HttpResponse.json({
      menus: mockMenus,
    })
  }),

  // POST /order/:menuId
  http.post(`${BASE_URL}/order/:menuId`, () => {
    return HttpResponse.json(null)
  }),

  // GET /order/list
  http.get(`${BASE_URL}/order/list`, () => {
    return HttpResponse.json({
      orders: mockOrders,
    })
  }),
]

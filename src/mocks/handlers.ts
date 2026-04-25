import { http, HttpResponse } from 'msw'

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
  // GET /api/alarms
  http.get('https://shoong-backend.fly.dev/api/alarms', () => {
    return HttpResponse.json({
      alarms: mockAlarms,
    })
  }),

  // GET /api/order/menu
  http.get('https://shoong-backend.fly.dev/api/order/menu', () => {
    return HttpResponse.json({
      menus: mockMenus,
    })
  }),

  // POST /api/order/:menuId
  http.post('https://shoong-backend.fly.dev/api/order/:menuId', () => {
    return HttpResponse.json(null)
  }),

  // GET /api/order
  http.get('https://shoong-backend.fly.dev/api/order', () => {
    return HttpResponse.json({
      orders: mockOrders,
    })
  }),
]

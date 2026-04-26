import type { Menu } from '#/models/menu'
import { httpClient } from '#/utils/httpClient'

export const fetchMenu = () => httpClient.get<{ menus: Menu[] }>('/order/menu')

import { Spacing } from '#/components/Spacing'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Text } from '@chakra-ui/react'
import { Row } from '#/components/Row'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { getMenuQueryOptions } from '#/query-options/menu'

import { orderMenu } from '#/remotes/order'
import type { Menu } from '#/models/menu'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
})

function MenuPage() {
  const navigate = useNavigate()
  const handleMenuClick = useMutation({
    mutationFn: async ({ menu }: { menu: Menu }) => {
      try {
        await orderMenu({ menuId: menu.id })
        navigate({ to: '/order-complete' })
      } catch (error) {
        alert('주문에 실패했습니다. 다시 시도해주세요.')
      }
    },
  })

  return (
    <>
      <Text textStyle="4xl">음식을 골라주세요</Text>
      <Spacing size={40} />
      <Suspense>
        <MenuList onClickMenu={(menu) => handleMenuClick.mutate({ menu })} />
      </Suspense>
    </>
  )
}

function MenuList({ onClickMenu }: { onClickMenu: (menu: Menu) => void }) {
  const {
    data: { menus },
  } = useSuspenseQuery(getMenuQueryOptions())

  return (
    <>
      {menus.map((menu) => (
        <Row key={menu.id} onClick={() => onClickMenu(menu)}>
          {menu.name}
        </Row>
      ))}
    </>
  )
}

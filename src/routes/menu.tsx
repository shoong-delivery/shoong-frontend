import { Spacing } from '#/components/Spacing'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Text } from '@chakra-ui/react'
import { Row } from '#/components/Row'
import { useMutation } from '@tanstack/react-query'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
})

const MENUS = ['김치찌개', '짬뽕', '언양 불고기', '수제 버거']

function MenuPage() {
  const navigate = useNavigate()
  const handleMenuClick = useMutation({
    mutationFn: async ({ menu }: { menu: string }) => {
      try {
        // 주문 API 호출;
        console.log(menu)
        navigate({ to: '/order-complete' })
      } catch (error) {}
    },
  })

  return (
    <>
      <Text textStyle="4xl">음식을 골라주세요</Text>
      <Spacing size={40} />
      {MENUS.map((menu) => (
        <Row key={menu} onClick={() => handleMenuClick.mutate({ menu })}>
          {menu}
        </Row>
      ))}
    </>
  )
}

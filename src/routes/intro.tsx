import { FixedBottomCTA } from '#/components/FixedBottomCTA'
import { Spacing } from '#/components/Spacing'
import { userNameStorage } from '#/storages/userName'
import { Input, Text } from '@chakra-ui/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/intro')({ component: IntroPage })

function IntroPage() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  return (
    <>
      <Text textStyle="4xl">
        Shoong~
        <br />
        반가워요!
      </Text>
      <Spacing size={40} />
      <Input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="이름을 입력해주세요"
        size="xl"
      />
      <FixedBottomCTA
        disabled={userName.length === 0}
        onClick={() => {
          userNameStorage.set(userName)
          navigate({ to: '/home' })
        }}
      >
        확인
      </FixedBottomCTA>
    </>
  )
}

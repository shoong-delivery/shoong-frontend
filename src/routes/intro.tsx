import { FixedBottomCTA } from '#/components/FixedBottomCTA'
import { Spacing } from '#/components/Spacing'
import { nicknameStorage } from '#/storages/nickname'
import { Input, Text } from '@chakra-ui/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/intro')({ component: IntroPage })

function IntroPage() {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState('')

  return (
    <>
      <Text textStyle="4xl">
        Shoong~
        <br />
        반가워요!
      </Text>
      <Spacing size={40} />
      <Input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임을 입력해주세요"
        size="xl"
      />
      <FixedBottomCTA
        disabled={nickname.length === 0}
        onClick={() => {
          nicknameStorage.set(nickname)
          navigate({ to: '/home' })
        }}
      >
        확인
      </FixedBottomCTA>
    </>
  )
}

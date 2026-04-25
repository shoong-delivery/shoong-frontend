import { userNameStorage } from '#/storages/userName'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    userNameStorage.get() != null

    if (userNameStorage.get() == null) {
      throw redirect({
        to: '/intro',
      })
    }

    throw redirect({
      to: '/home',
    })
  },
})

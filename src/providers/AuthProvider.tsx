'use client'

import { SessionProvider } from 'next-auth/react'

type childrenProp = {
  children: React.ReactNode
}

export default function AuthProvider({ children: children }: childrenProp) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

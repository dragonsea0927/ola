'use client';

import React from 'react'
import { usePathname } from 'next/navigation'
import Layout from '../Layouts/Layout'

interface Props {
  children: React.ReactNode
}

export default function App({ children }: Props) {
  const pathname = usePathname()
  return (
    <div>
      {pathname.includes('auths') ? (
        <>{children}</>
      ) : (
        <Layout>
          {children}
        </Layout>
      )
      }
    </div >
  )
}

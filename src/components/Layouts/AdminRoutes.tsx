import React from 'react'
import Link from 'next/link'
import { AdminRoutesProps } from '@/types'

const AdminRoutes = ({ session, isActive, signOut }: AdminRoutesProps) => {
  return (
    <>
      <p>
        {session?.user?.name} ({session?.user?.email})
      </p>
      <Link href="/" data-active={isActive('/')}>
        Project
      </Link>

      <Link href="/create" data-active={isActive('/create')}>
        Create Project
      </Link>

      <Link href="/profile" data-active={isActive('/profile')}>
        Profile
      </Link>

      <Link href="/api/auth/signout"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
        data-active={isActive('/api/auth/signout')}
      >
        Sign Out
      </Link>
    </>
  )
}

export default AdminRoutes
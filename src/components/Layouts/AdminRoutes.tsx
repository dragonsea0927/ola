import React from 'react'
import Link from 'next/link'
import { AdminRoutesProps } from '@/types'

// interface AdminRoutesProps {
//   session: any;
//   isActive: (pathname: string) => boolean;
//   signOut: () => void;
// }

const AdminRoutes = ({ session, isActive, signOut }: AdminRoutesProps) => {
  return (
    <>
      <p>
        {session?.user?.name} ({session?.user?.email})
      </p>
      <Link href="/">
        <a data-active={isActive('/')}>Project</a>
      </Link>

      <Link href="/create">
        <a data-active={isActive('/create')}>Create Project</a>
      </Link>

      <Link href="/profile">
        <a data-active={isActive('/profile')}>Profile</a>
      </Link>

      <Link href="/api/auth/signout"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        <a data-active={isActive('/api/auth/signout')}>Sign Out</a>
      </Link>
    </>
  )
}

export default AdminRoutes
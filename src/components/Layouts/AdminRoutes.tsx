'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { navItems } from '@/utils';

interface AdminRoutesProps {
  isActive: (pathname: string) => boolean
}

export default function AdminRoutes({ isActive }: AdminRoutesProps) {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' })
  }

  return (
    <>{!session ? (
      <Link href='/auth/signin' className='cursor-pointer hidden'>Login</Link>
    ) : (
      <React.Fragment>
        <Link href='/admin/dashboard' className='text-lg capitalize'>Dashboard</Link>
        <span className='cursor-pointer text-lg capitalize' onClick={handleLogout}>Logout</span>
      </React.Fragment>
    )}

      <div
        className='flex w-5 h-4 lg:hidden md:hidden flex-col justify-between cursor-pointer'
        onClick={() => setOpen(!open)}>
        <div className='w-full h-[2px] bg-[var(--textColor)]'></div>
        <div className='w-full h-[2px] bg-[var(--textColor)]'></div>
        <div className='w-full h-[2px] bg-[var(--textColor)]'></div>
      </div>

      {open && (
        <div className='absolute top-[80px] left-0 w-full bg-[var(--bg)] flex flex-col items-center justify-start gap-12 text-xl h-[100vh] py-4'>
          {navItems.map(({ path, title, id }) => (
            <Link href={path}
              className={`md:hidden text-lg capitalize ${hoverStyles} ${isActive(path) && 'text-[var(--primary)] font-medium'}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}

          {!session ? (
            <Link href='/auth/signin' className={`hidden ${hoverStyles}`}>Login</Link>
          ) : (
            <React.Fragment>
              <Link href='/projects' className={`${hoverStyles}`}>Dashboard</Link>
              <span onClick={handleLogout} className={`${hoverStyles}`}>Logout</span>
            </React.Fragment>
          )}
        </div>
      )}
    </>
  )
}

const hoverStyles = `
  hover:font-medium
  hover:bg-[var(--cta)] hover:text-[var(--ctaText)] hover:rounded-full
  hover:px-5 hover:py-2 hover:transition-all hover:duration-300
`

'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function AdminRoutes() {
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
        <div className='absolute top-[100px] left-0 w-full bg-[var(--bg)] flex flex-col items-center justify-center gap-12 text-xl h-[calc(100vh - 100px)] py-4'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>

          {!session ? (
            <Link href='/auth/signin'>Login</Link>
          ) : (
            <React.Fragment>
              <Link href='/projects'>Dashboard</Link>
              <span onClick={handleLogout}>Logout</span>
            </React.Fragment>
          )}
        </div>
      )}
    </>
  )
}

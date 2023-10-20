'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminRoutes() {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    const res = await signOut({ redirect: false, callbackUrl: '/' })
    if (!res?.url) {
      router.push('/signin')
    }
  }

  return (
    <>{status === "unauthenticated" ? (
      <Link href='/auth/signin' className='cursor-pointer hidden'>Login</Link>
    ) : (
      <React.Fragment>
        <small>
          Welcome, {session?.user?.name} ({session?.user?.email})
        </small>
        <Link href='/create' className='cursor-pointer'>New Project</Link>
        <span className='cursor-pointer' onClick={handleLogout}>Logout</span>
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
        <div className='absolute top-24 left-0 w-full h-[calc(100vh-100px)]bg-[primary] flex flex-col items-center justify-center gap-12 text-xl'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>

          {status === "unauthenticated" ? (
            <Link href='/auth/signin'>Login</Link>
          ) : (
            <React.Fragment>
              <Link href='/write'>New Project</Link>
              <Link href='/projects'>Projects</Link>
              <span onClick={handleLogout}>Logout</span>
            </React.Fragment>
          )}
        </div>
      )}
    </>
  )
}

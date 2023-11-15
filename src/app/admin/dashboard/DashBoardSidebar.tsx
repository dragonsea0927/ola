'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Circle = (isActive: (pathname: string) => boolean, pathname: string) => (
  <div className={`w-2 h-2 rounded-full ${isActive(pathname) && 'bg-blue-400'}`}></div>
)

export default function DashBoardSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <div className='flex flex-col gap-5 mt-5 mx-auto'>
      <div className='flex gap-2 items-center'>
        {Circle(isActive, '/admin/dashboard')}
        <Link href='/admin/dashboard' className='text-base text-[var(--textColor)]'>Dashboard</Link>
      </div>
      <div className='flex gap-2 items-center'>
        {Circle(isActive, '/admin/dashboard/projects')}
        <Link href='/admin/dashboard/projects' className='text-base text-[var(--textColor)]'>Projects</Link>
      </div>
      <div className='flex gap-2 items-center'>
        {Circle(isActive, '/admin/dashboard/create')}
        <Link href='/admin/dashboard/create' className='text-base text-[var(--textColor)]'>Add Project</Link>
      </div>
      <div className='flex gap-2 items-center'>
        {Circle(isActive, '/admin/dashboard/posts')}
        <Link href="/admin/dashboard/posts" className='text-base text-[var(--textColor)]'>Posts</Link>
      </div>
    </div>
  )
}

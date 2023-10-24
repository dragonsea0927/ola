'use client';

import React from 'react';
import { navItems } from '@/utils';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Link from 'next/link'
import AdminRoutes from './AdminRoutes';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { FaThreads } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';

export default function TopNav() {
  const routePath = usePathname();
  const isActive = (pathname: string) => routePath === pathname;
  return (
    <div className='flex items-center justify-between h-[80px]'>
      <div className='flex gap-3 flex-1'>
        <Logo />
      </div>
      <div className='hidden lg:flex gap-3 flex-1'>
        <FaLinkedinIn className='w-6 h-6' />
        <FaXTwitter className='w-6 h-6' />
        <FaMediumM className='w-6 h-6' />
        <FaInstagram className='w-6 h-6' />
        <FaHashnode className='w-6 h-6' />
        <FaThreads className='w-6 h-6' />
        <BsGithub className='w-6 h-6' />
      </div>
      <div className='flex flex-2 md:flex-1 gap-4 items-center text-base'>
        <ThemeToggle />
        {navItems.map(({ path, title, id }) => (
          <Link href={path}
            className={`hidden md:block text-lg capitalize ${isActive(path) && 'text-[var(--primary)] font-medium'}`}
            key={id}>
            {title}
          </Link>
        ))}
        <AdminRoutes />
      </div>
    </div>
  )
}
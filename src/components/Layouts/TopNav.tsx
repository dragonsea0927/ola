'use client';

import React from 'react';
import { navItems, socialLinks } from '@/utils';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Link from 'next/link'
import AdminRoutes from './AdminRoutes';
import CustomIcon from '../IconsComponent/CustomIcon';

export default function TopNav() {
  const routePath = usePathname();
  const isActive = (pathname: string) => routePath === pathname;
  return (
    <div className='flex items-center justify-between h-[80px] sticky top-0 z-10 bg-[var(--bg)]'>
      <div className='flex gap-3 flex-1'>
        <Logo />
      </div>
      <div className='hidden lg:flex gap-3 flex-1'>
        {socialLinks.map(({ id, path, icon }) => (
          <Link href={path} target='_blank'
            rel='noopener noreferrer' key={id}>
            <CustomIcon icon={icon} className='h-6 w-6' />
          </Link>
        ))}
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
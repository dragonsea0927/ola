import React from 'react'
import { getAuthSession } from '@/utils/auth';
import DashBoardSidebar from './DashBoardSidebar';

interface Props {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: Props) {
  const session = await getAuthSession();
  return (
    <div className='flex justify-between mt-10 w-full gap-3'>
      <section className='flex w-1/5'>
        <div className='bg-[#F2F6FF] flex flex-col gap-20 w-full px-2'>
          <h1 className='text-2xl text-center pt-5 font-bold text-[var(--primary)] md:text-4xl'>Ola.</h1>
          <DashBoardSidebar />
        </div>
      </section>
      <section className='w-full h-full bg-white relative'>
        <p className='absolute right-2 top-2'>Welcome {session?.user?.name}</p>
        {children}
      </section>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className='flex justify-between mt-10'>
      <section>
        {/* sidebar */}
        <div className='w-1/6 bg-[#F2F6FF] h-screen'>
          <h1 className='text-2xl font-bold text-blue-500 md:text-4xl'>OlaDev</h1>
          <div className='flex flex-col gap-5 mt-5'>
            <div className='flex gap-2 items-center'>
              <div className='w-2 h-2 rounded-full bg-blue-400'></div>
              <Link href='/admin/dashboard' className='text-sm text-[var(--textColor)]'>Dashboard</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-2 h-2 rounded-full bg-gray-400'></div>
              <Link href='/admin/dashboard/projects' className='text-sm text-[var(--textColor)]'>Projects</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-2 h-2 rounded-full bg-gray-400'></div>
              <Link href='/admin/dashboard/create' className='text-sm text-[var(--textColor)]'>Add Project</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-2 h-2 rounded-full bg-gray-400'></div>
              <Link href="/admin/dashboard/test" className='text-sm text-[var(--textColor)]'>Orders</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='w-5/6 h-screen bg-white'>
        {children}
      </section>

    </div>
  )
}

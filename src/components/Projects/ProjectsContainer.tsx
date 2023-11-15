import React from 'react'

export default function ProjectsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:p-10 lg:gap-8'>
      {children}
    </div>
  )
}

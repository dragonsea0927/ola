import React from 'react'
import Link from 'next/link'

const CreateButton: React.FC = () => {
  return (
    <>
      <Link className='bg-[var(--primary) text-white w-[200px] h-[50px]]' href="/admin/dashboard/create">
        Create New Project
      </Link>
    </>
  )
}

export default CreateButton
import React from 'react'
import CreateButton from '@/components/Button/CreateProjectBtn';

const Noprojects: React.FC = () => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-5'
    >
      <p>You have no project drafts.</p>
      <CreateButton />
    </div>
  )
}

export default Noprojects
import React from 'react'
import { Drafts } from '@/components'
import CreateButton from '@/components/Button/CreateProjectBtn';
import Noprojects from '@/components/Projects/NoProject';

const getProjects = async () => {
  const res = await fetch(`${process.env.API_URL}/projects`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

async function Projects() {
  const projects = await getProjects()
  return (
    <>
      <div
        className='my-0 mx-auto'
      >
        {projects?.data.length > 0 && (
          <div
            className='flex justify-end mt-5'
          >
            <CreateButton />
          </div>
        )}
        <h1
          className='text-4xl font-bold text-center text-[var(--textColor)] mt-5'
        >Project Drafts</h1>
        {projects?.data.length === 0 && <Noprojects />}
        {projects?.data.length > 0 && <Drafts projects={projects?.data} />}
      </div>
    </>
  )
}

export default Projects
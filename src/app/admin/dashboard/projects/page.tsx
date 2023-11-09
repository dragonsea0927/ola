import React from 'react'
import { Drafts } from '@/components'
import prisma from '@/lib/prisma';
import { getAuthSession } from '@/utils/auth';
import CreateButton from '@/components/Button/CreateProjectBtn';
import Noprojects from '@/components/Projects/NoProject';

const getProjects = async (email: string) => {
  const res = await prisma.project.findMany({
    where: {
      author: {
        email: email
      }
    },
    include: {
      author: {
        select: {
          name: true,
        }
      }
    }
  })

  if (!res) {
    throw new Error('Something went wrong')
  }

  return JSON.parse(JSON.stringify(res))
}

async function Projects() {
  const session = await getAuthSession()
  const projects = await getProjects(session?.user?.email!)
  return (
    <>
      <div
        className='my-0 mx-auto'
      >
        {projects.length > 0 && (
          <div
            className='flex justify-end mt-5'
          >
            <CreateButton />
          </div>
        )}
        <h1
          className='text-4xl font-bold text-center text-[var(--textColor)] mt-5'
        >Project Drafts</h1>
        {projects.length === 0 && <Noprojects />}
        {projects.length > 0 && <Drafts projects={projects} />}
      </div>
    </>
  )
}

export default Projects
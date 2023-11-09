import React from 'react'
import { Drafts, Status } from '@/components'
import prisma from '@/lib/prisma';
import { Project } from '@/types';
import Link from 'next/link';
import { getAuthSession } from '@/utils/auth';
import CreateButton from '@/components/Button/CreateProjectBtn';
import Noprojects from '@/components/Projects/NoProject';


// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = await getSession({ req })

//   if (!session) {
//     res.statusCode = 403
//     return {
//        { projects: [] }
//     }
//   }

//   const projects = await prisma.project.findMany({
//     where: {
//       author: {
//         email: session?.user?.email
//       },
//     },
//     include: {
//       author: {
//         select: {
//           name: true,
//         }
//       }
//     }
//   })

//   return {
//     props: { projects: JSON.parse(JSON.stringify(projects)) }
//   }
// }

type Props = {
  projects: Project[]
}

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
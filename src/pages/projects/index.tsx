import React from 'react'
import { Layout, AccessDenied } from '@/components'
import { useSession, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { Project } from '@/types';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 403
    return {
      props: { projects: [] }
    }
  }

  const projects = await prisma.project.findMany({
    where: {
      user: {
        email: session?.user?.email
      },
      published: false
    },
    include: {
      user: {
        select: {
          name: true,
        }
      }
    }
  })

  return {
    props: { projects: JSON.parse(JSON.stringify(projects)) }
  }
}

type Props = {
  projects: Project[]
}

const Noprojects: React.FC = (props) => {
  return (
    <>
      <p>You have no project drafts.</p>
      <button>
        <Link href="/create">Create New Project</Link>
      </button>
    </>
  )
}

const Projects: React.FC<Props> = (props) => {
  const { data: session, status } = useSession();

  const loading = status === 'loading';

  if (loading) return null;

  if (!session) {
    return (
      <AccessDenied />
    )
  }

  return (
    <Layout>
      <div>
        <h1>Project Drafts</h1>
        {props.projects.length === 0 && <Noprojects />}
        {props.projects.map((project: Project) => (
          <div key={project?.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.name}</p>
            <p>{project.githubUrl}</p>
            <p>{project.liveUrl}</p>
            <p>{project.stacks}</p>
            <p>{project.coverImgUrl}</p>
            <p>{project.modalImgUrl}</p>
            <p>{project.tag}</p>
            <p>{project.userId}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
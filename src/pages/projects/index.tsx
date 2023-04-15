import React from 'react'
import { Layout, AccessDenied } from '@/components'
import { useSession, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { Project } from '@/types';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Typography variant='body1'>You have no project drafts.</Typography>
      <Button variant='contained'
        color='secondary'
        size='large'
        sx={{
          width: '200px',
          color: 'white',
          height: '50px',
        }}
        component={Link}
        href='/create'
      >
        Create New Project
      </Button>
    </Box>
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
        <Typography variant='h1'
          gutterBottom
          sx={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >Project Drafts</Typography>
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
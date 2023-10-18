import React from 'react'
import { Layout, AccessDenied, Drafts, Status } from '@/components'
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
      author: {
        email: session?.user?.email
      },
    },
    include: {
      author: {
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

const CreateButton: React.FC = (props) => {
  return (
    <>
      <Button
        variant='contained'
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
      </Button></>
  )
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
      <CreateButton />
    </Box>
  )
}

const Projects: React.FC<Props> = (props) => {
  const { data: session, status } = useSession();

  const loading = status === 'loading';

  if (loading) return <Status message='Authenticating...' />;

  if (!session) {
    return (
      <AccessDenied />
    )
  }

  return (
    <>
      <Box
        sx={{ margin: '0 auto' }}
      >
        {props.projects.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '20px',
            }}
          >
            <CreateButton />
          </Box>
        )}
        <Typography variant='h1'
          gutterBottom
          sx={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >Project Drafts</Typography>
        {props.projects.length === 0 && <Noprojects />}
        {props.projects.length > 0 && <Drafts projects={props.projects} />}
      </Box>
    </>
  )
}

export default Projects
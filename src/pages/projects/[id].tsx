import React from 'react'
import { Layout, Toast, AccessDenied } from '@/components'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import prisma from '@/lib/prisma';
import { Project } from '@/types';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: { project: JSON.parse(JSON.stringify(project)) },
  };
};

const ProjectPage: React.FC<Project> = (props) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <Typography variant='h1'>{props?.project?.name}</Typography>
      <Typography variant='body1'>{props?.project?.description}</Typography>
    </Layout>
  );
};

export default ProjectPage;
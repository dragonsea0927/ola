import React from 'react'
import { Layout, Toast, AccessDenied } from '@/components'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import prisma from '@/lib/prisma';
import { useTogglePublish } from '@/hooks';
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

const EditProjectPage: React.FC<Project> = (props) => {
  const { published, togglePublish, showToast, message, setShowToast } = useTogglePublish({ id: props?.project?.id, initialState: props?.project?.published });
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

  const userHasValidSession = Boolean(session);
  const projectBelongsToUser = session?.user?.email === props?.project.author?.email;

  return (
    <Layout>
      {showToast && <Toast severity='success' message={message} onClose={() => setShowToast(!showToast)} open={showToast} />
      }
      <Typography variant='h4'>{!props?.project?.published ? `${props?.project?.name} (Draft)` : props?.project?.name}
      </Typography>
      <button onClick={() => togglePublish()
      }>{published && userHasValidSession && projectBelongsToUser ? 'Publish' : 'Unpublish'}</button>
    </Layout>
  );
}

export default EditProjectPage
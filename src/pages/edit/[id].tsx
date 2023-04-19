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

async function publishProject(id: string) {
  const response = await fetch(`/api/v1/publish/${id}`, {
    method: 'PUT',
  });

  return response.json();
}


const EditProjectPage: React.FC<Project> = (props) => {
  const [message, setMessage] = React.useState<string>('');
  const { data: session, status } = useSession();
  const [showToast, setShowToast] = React.useState<boolean>(false);

  const togglePublish = async () => {
    const res = await publishProject(props?.project?.id);
    if (res?.status === 'success') {
      setMessage(res?.message);
      setShowToast(!showToast);
    }
  };


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
      {!props?.project.published && userHasValidSession && projectBelongsToUser && (
        <button onClick={() => togglePublish()
        }>Publish</button>
      )}


      {props?.project?.published && (
        <>
          <Typography variant='body1'>Published: {props?.project?.published}</Typography>
          <button onClick={() => togglePublish()
          }>Unpublish</button>
        </>
      )}
    </Layout>
  );
}

export default EditProjectPage
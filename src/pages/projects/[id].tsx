import React from 'react'
import { Layout, AccessDenied, CustomButton, Toast } from '@/components'
import { styled, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import prisma from '@/lib/prisma';
import { Project } from '@/types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Image from 'next/image'
import { useTogglePublish } from '@/hooks';

const ProjsctContent = styled(Grid)(({ theme }) => ({
  width: '85%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  padding: 20,
  margin: '100px auto',
  backgroundColor: 'white',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const ProjectImage = styled('div')(({ theme }) => ({
  img: {
    width: 545,
    height: 408,
    borderRadius: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const ProjectDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',

  h4: {
    fontSize: '35px',
    fontWeight: 600,
    marginBottom: '18px',
  },
  button: {
    '&:hover': {
      transition: '0.4s',
      transform: 'scale(1.04)',
      zIndex: 1,
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    },
  },

  p: {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 400,
    marginBottom: '18px',
  },

  '.btn-container': {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const BtnContainer = styled('div')(({ theme }) => ({
  width: '500px',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  margin: '0 auto',

  button: {
    width: '180px',
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    backgroundColor: theme.white.main,
    '&:hover': {
      transition: '0.4s',
      transform: 'scale(1.04)',
      zIndex: 1,
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    },

  }
}))

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
  const userHasValidSession = Boolean(session);
  const projectBelongsToUser = session?.user?.email === props?.project.author?.email;
  const { published, togglePublish, showToast, message, setShowToast } = useTogglePublish({
    id: props?.project?.id, initialState: props?.project?.published
  });

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
      {showToast && <Toast severity='success' message={message} onClose={() => setShowToast(!showToast)} open={showToast} />
      }
      <ProjsctContent>
        <ProjectImage>
          <Image
            src={props?.project?.modalImgUrl}
            alt={props?.project?.modalImgUrl}
            width={545}
            height={408}
          />
        </ProjectImage>
        <ProjectDetails>
          <Typography variant='h6'
            sx={{ textTransform: 'capitalize' }}
          >{props?.project?.tag}</Typography>
          <Typography variant='h4'
            sx={{ textTransform: 'capitalize' }}
          >{props?.project?.name}</Typography>
          <Typography variant='body1'>
            {props?.project?.description}
          </Typography>
          <Typography variant='body1'
            sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
          >
            Tech Stacks: {props?.project?.stacks.map((stack: string, idx: number) => (
              <li key={idx}>{stack}</li>
            ))}
          </Typography>
          <div className='btn-container'>
            <CustomButton
              variant='contained'
              color='primary'
              width='180px'
              onClick={() => { }}
            >
              Live Demo <LinkIcon />
            </CustomButton>

            <CustomButton
              variant='outlined'
              color='primary'
              width='180px'
              onClick={() => { }}
            >
              Source Code <GitHubIcon />
            </CustomButton>
          </div>
        </ProjectDetails>
      </ProjsctContent>
      <div>
        {userHasValidSession && projectBelongsToUser && (
          <BtnContainer>
            <button
              onClick={() => togglePublish()}
            >
              {published && userHasValidSession && projectBelongsToUser ? 'Publish' : 'Unpublish'}
            </button>

            <button
              onClick={() => { }}
            >
              Edit
            </button>

            <button
              onClick={() => { }}
            >
              Delete
            </button>
          </BtnContainer>
        )}
      </div>
    </Layout>
  );
};

export default ProjectPage;
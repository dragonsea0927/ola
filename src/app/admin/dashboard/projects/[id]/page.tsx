import React from 'react'
import { CustomButton } from '@/components'
import prisma from '@/lib/prisma';
import { Project } from '@/types';
import { BsGithub as GitHubIcon } from 'react-icons/bs';
import { BiLinkExternal as LinkIcon } from 'react-icons/bi';
import Image from 'next/image'
import { getAuthSession } from '@/utils/auth';
import ConditionalHeader from './ConditionalHeader';
import DeleteProject from './DeleteProject';
import Link from 'next/link';

interface Props {
  params: {
    id: string
  }
}

// const ProjsctContent = styled(Grid)(({ theme }) => ({
//   width: '85%',
//   height: '100%',
//   display: 'grid',
//   gridTemplateColumns: 'repeat(2, 1fr)',
//   gap: '20px',
//   padding: 20,
//   margin: '100px auto',
//   backgroundColor: 'white',
//   borderRadius: '8px',
//   [theme.breakpoints.down('sm')]: {
//     gridTemplateColumns: 'repeat(1, 1fr)',
//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

// }))

// const ProjectImage = styled('div')(({ theme }) => ({
//   img: {
//     width: 545,
//     height: 408,
//     borderRadius: '10px',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: '16px',
//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

// }))

// const ProjectDetails = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '10px',

//   h4: {
//     fontSize: '35px',
//     fontWeight: 600,
//     marginBottom: '18px',
//   },
//   button: {
//     '&:hover': {
//       transition: '0.4s',
//       transform: 'scale(1.04)',
//       zIndex: 1,
//       boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
//     },
//   },

//   p: {
//     fontSize: '18px',
//     lineHeight: '25px',
//     fontWeight: 400,
//     marginBottom: '18px',
//   },

//   '.btn-container': {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '20px',
//   },

//   [theme.breakpoints.down('sm')]: {
//     padding: '16px',
//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

// }))

// const BtnContainer = styled('div')(({ theme }) => ({
//   width: '500px',
//   display: 'flex',
//   flexDirection: 'row',
//   gap: '20px',
//   margin: '0 auto',

//   button: {
//     width: '180px',
//     padding: '10px 20px',
//     fontSize: '18px',
//     borderRadius: '8px',
//     border: 'none',
//     outline: 'none',
//     cursor: 'pointer',
//     color: theme.palette.secondary.main,
//     backgroundColor: theme.white.main,
//     '&:hover': {
//       transition: '0.4s',
//       transform: 'scale(1.04)',
//       zIndex: 1,
//       boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
//     },

//   }
// }))

const getProject = async (id: string) => {
  const res = await prisma.project.findUnique({
    where: {
      id: id
    },
    include: {
      author: {
        select: {
          name: true,
          email: true
        }
      }
    }
  });

  if (!res) {
    throw new Error('Something went wrong')
  }
  return JSON.parse(JSON.stringify(res))
}

const ProjectPage = async ({ params }: Props) => {
  const { id } = params
  const session = await getAuthSession();
  const project = await getProject(id);

  return (
    <>
      <div className='w-[85%] h-full grid grid-cols-1 md:grid-cols-1 gap-1 p-5 my-[100px] mx-auto bg-[var(--contactBg)] rounded-lg'>
        <div className='relative h-[408px] p-4 md:p-0'>
          <Image
            src={project?.modalImgUrl}
            alt={project?.modalImgUrl}
            fill
            className='w-full absolute object-cover rounded-lg'
          />
        </div>
        <div className='flex flex-col p-3 gap-5'>
          <div className='flex items-center justify-between'>
            <h6 className='text-[var(--textColor)] text-lg font-semibold capitalize'>{project?.tag}</h6>
            <ConditionalHeader project={project} />
          </div>
          <p className='text-lg font-normal mb-4'>
            {project?.description}
          </p>
          <ul className='flex flex-wrap gap-2'>
            Tech Stacks: {project?.stacks.map((stack: string, idx: number) => (
              <li key={idx}>{stack}</li>
            ))}
          </ul>
          <div className='btn-container flex items-center justify-between w-full gap-5'>
            <div className='flex items-center  gap-5'>
              {project?.liveUrl && (
                <CustomButton
                  variant='contained'
                  color='primary'
                  width='180px'
                >
                  <Link className='flex gap-3 items-center' href={project?.liveUrl} target='_blank'>
                    Live Demo <LinkIcon />
                  </Link>
                </CustomButton>
              )}

              {project?.githubUrl && (
                <CustomButton
                  variant='outlined'
                  color='primary'
                  width='180px'
                >
                  <Link className='flex gap-3 items-center' href={project?.githubUrl}>
                    Source Code <GitHubIcon />
                  </Link>
                </CustomButton>
              )}
            </div>
            <DeleteProject project={project} session={session} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
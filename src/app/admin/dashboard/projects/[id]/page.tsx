import React from 'react'
import { CustomButton } from '@/components'
import prisma from '@/lib/prisma';
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

export const revalidate = 20;

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
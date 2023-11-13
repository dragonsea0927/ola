import React from 'react'
import { CustomButton, CustomModal } from '..'
import Image from 'next/image'
import { BsGithub as GitHubIcon } from 'react-icons/bs';
import { BiLinkExternal as LinkIcon } from 'react-icons/bi';
import { useMediaQuery } from '@/hooks';
import Link from 'next/link';

interface ProjectModalProps {
  open: boolean
  handleClose: (id: string) => void
  project: any
}

const ProjectModal = ({ open, handleClose, project }: ProjectModalProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <CustomModal
      open={open}
      handleClose={() => {
        handleClose(project.id);
      }}
      width={isMobile ? '100%' : '1230px'}
      height={isMobile ? '96vh' : '512px'}
    >
      <div className="grid grid-cols-1 overflow-y-auto md:overflow-hidden lg:grid-cols-2 gap-3 md:gap-8 bg-[var(--bg)] px-5 py-5 lg:px-8 lg:py-10 rounded-lg w-full h-full">
        <div className="w-full h-40 md:hidden lg:block lg:h-[350px] relative rounded-lg lg:mt-0">
          <Image
            src={project.modalImgUrl}
            alt="modal"
            fill
            className='rounded-lg object-cover'
          />
        </div>
        <div className="flex flex-col">
          <h6 className="capitalize text-[var(--textColor)] text-xl md:text-2xl font-semibold mb-2">
            {project.tag}
          </h6>
          <h4 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--textColor)]">{project.name}</h4>
          <p className="text-base md:text-lg mb-4 text-[var(--textColor)] ">
            {isMobile
              ? "Prompt engineering is not just about designing and developing prompts. It encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. It's an important skill to interface, build with, and understand capabilities of LLMs."
              : project.description}
          </p>
          <p className="text-base md:text-lg text-[var(--textColor)] mb-4">
            Tech Stacks: {project.stacks.join(', ')}
          </p>
          <div className="flex gap-4 items-center">
            {project?.liveUrl.startsWith('https') && (
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

            {project?.githubUrl.startsWith('https') && (
              <CustomButton
                variant='outlined'
                color='primary'
                width='180px'
              >
                <Link className='flex gap-3 items-center' href={project?.githubUrl} target='_black'>
                  Source Code <GitHubIcon />
                </Link>
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </CustomModal>
  );
};


export default ProjectModal
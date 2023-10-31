'use client';

import React from 'react'
import Hero from '../HeroPage/Hero'
import ProjectSection from '../Projects/ProjectSection'
import { Project } from '@/types'
import BlogSection from '../Blogs/BlogSection'
import { useToggle } from '@/hooks';
import ProjectModal from '../Modal/ProjectModal';
import { BlogModal } from '..';


type props = {
  projects: Project[]
  posts: any
}

export default function Homepage({ projects, posts }: props) {
  const { isOpen: openModal, toggleOpen: setOpenModal } = useToggle(false)
  const { isOpen: openBlogModal, toggleOpen: setOpenBlogModal } = useToggle(false)
  const [project, setProject] = React.useState({})
  const [blog, setBlog] = React.useState({})

  const handleOpenModal = (id: string) => {
    setOpenModal()
    const project = projects?.find((item: Project) => item.id === id)
    setProject(project || {})
  }

  const handleOpenBlogModal = (guid: string) => {
    setOpenBlogModal()
    const item = posts?.items?.find((item: any) => item.guid === guid)
    setBlog(item)
  }

  return (
    <div>
      {openModal && <ProjectModal open={openModal} handleClose={handleOpenModal} project={project} />}
      {openBlogModal && <BlogModal blogItem={blog} open={openBlogModal} handleClose={handleOpenBlogModal} />}
      <Hero />
      <ProjectSection data={projects} handleOpenModal={handleOpenModal} />
      <BlogSection data={posts} handleOpenBlogModal={handleOpenBlogModal} />
    </div>
  )
}

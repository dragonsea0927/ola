import React from 'react'
import Hero from '../HeroPage/Hero'
import ProjectSection from '../Projects/ProjectSection'
import { Project } from '@/types'
import BlogSection from '../Blogs/BlogSection'

type props = {
  projects: Project[]
  posts: any
}

export default function Homepage({ projects, posts }: props) {
  const handleOpenBlogModal = (item: any) => {
    console.log(item)
  }
  return (
    <div>
      <Hero />
      <ProjectSection data={projects} />
      <BlogSection data={posts} />
    </div>
  )
}

import React from 'react'
import Hero from '../HeroPage/Hero'
import ProjectSection from '../Projects/ProjectSection'
import { Project } from '@/types'

type props = {
  projects: Project[]
  posts: any
}

export default function Homepage({ projects }: props) {
  return (
    <div>
      <Hero />
      <ProjectSection data={projects} />
    </div>
  )
}

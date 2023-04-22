import React from 'react'
import { Projects } from './AllProjects'
import { CustomCard } from '@/components'
import { ProjectProps } from '@/types'
import { projectsFilter } from '@/utils'

const FrontendProjects = ({ projects, handleOpenModal }: ProjectProps) => {
  const frontendProjects = projectsFilter(projects, 'frontend')
  return (
    <Projects>
      {frontendProjects?.map((item) => (
        <CustomCard
          key={item.id}
          image={item.modalImgUrl}
          overlayText='View Project'
          name={item.name}
          role={item.tag}
          description={item.description}
          onClick={() => handleOpenModal(item.id)}
        />
      ))}
    </Projects>
  )
}

export default FrontendProjects
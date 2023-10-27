import React from 'react'
import { CustomCard } from '@/components'
import { ProjectProps } from '@/types'
import { projectsFilter } from '@/utils'
import ProjectsContainer from './ProjectsContainer'

const FrontendProjects = ({ projects, handleOpenModal }: ProjectProps) => {
  const frontendProjects = projectsFilter(projects, 'frontend')
  return (
    <ProjectsContainer>
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
    </ProjectsContainer>
  )
}

export default FrontendProjects
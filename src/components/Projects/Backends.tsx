import React from 'react'
import { ProjectProps } from '@/types'
import { projectsFilter } from '@/utils'
import { CustomCard } from '@/components'
import ProjectsContainer from './ProjectsContainer'

const BackendProjects: React.FC<ProjectProps> = ({ projects, handleOpenModal }) => {
  const backendProjects = projectsFilter(projects, 'backend')
  return (
    <ProjectsContainer>
      {backendProjects?.map((item) => (
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

export default BackendProjects
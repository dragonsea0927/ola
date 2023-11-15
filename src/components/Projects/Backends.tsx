import React from 'react'
import { ProjectProps } from '@/types'
import { projectsFilter } from '@/utils'
import { CustomCard } from '@/components'
import ProjectsContainer from './ProjectsContainer'
import EmptyProject from './EmptyProject'

const BackendProjects: React.FC<ProjectProps> = ({ projects, handleOpenModal }) => {
  const backendProjects = projectsFilter(projects, 'backend')

  if (backendProjects.length === 0) {
    return <EmptyProject />
  }

  return (
    <ProjectsContainer>
      {backendProjects?.map((item) => (
        <CustomCard
          key={item.id}
          image={item.coverImgUrl}
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
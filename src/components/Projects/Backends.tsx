import React from 'react'
import { Projects } from './AllProjects'
import { ProjectProps } from '@/types'
import { projectsFilter } from '@/utils'
import { CustomCard } from '@/components'

const BackendProjects: React.FC<ProjectProps> = ({ projects, handleOpenModal }) => {
  const backendProjects = projectsFilter(projects, 'backend')
  return (
    <Projects>
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
    </Projects>

  )
}

export default BackendProjects
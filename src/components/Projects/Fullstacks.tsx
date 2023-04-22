import React from 'react'
import { Projects } from './AllProjects'
import { ProjectProps } from '@/types'
import { projectsFilter } from '@/utils'
import { CustomCard } from '@/components'

const FullstackProjects: React.FC<ProjectProps> = ({ projects, handleOpenModal }) => {
  const fullstackProjects = projectsFilter(projects, 'fullstack')
  return (
    <Projects>
      {fullstackProjects?.map((item) => (
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

export default FullstackProjects
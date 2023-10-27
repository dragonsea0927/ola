import React from 'react'
import { CustomCard } from '..'
import { Project } from '@/types'
import ProjectsContainer from './ProjectsContainer'

type props = {
  data: any;
  handleOpenModal?: (id: string) => void;
};

const AllProjects = ({ data, handleOpenModal }: props) => {

  if (data.length === 0) {
    return <div>Cooking up something! :)</div>
  }
  return (
    <div className='h-full'>
      <ProjectsContainer>
        {data?.map((item: Project) => (
          <CustomCard
            key={item.id}
            image={item.modalImgUrl}
            overlayText='View Project'
            name={item.name}
            role={item.tag}
            description={item.description}
            onClick={() => handleOpenModal && handleOpenModal(item.id)}
          />
        ))}
      </ProjectsContainer>
    </div>
  )
}

export default AllProjects
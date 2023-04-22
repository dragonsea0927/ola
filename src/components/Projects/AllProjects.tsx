import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import { CustomCard } from '..'
import { Project } from '@/types'

export const Projects = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '80px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '10px',
    gap: '30px'
  },

  [theme.breakpoints.up('md')]: {
    gap: '30px',
  },

  [theme.breakpoints.up('lg')]: {

  },

}))

const AllProjects = ({ handleOpenModal, projects }: { handleOpenModal: (id: string) => void, projects: any }) => {

  return (
    <div>
      <Projects>
        {projects?.map((item: Project) => (
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
    </div>
  )
}

export default AllProjects
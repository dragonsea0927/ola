import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import { CustomCard } from '..'
import ProjectImage from '../../assets/images/portfolio.jpg'

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

const AllProjects = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
  return (
    <div>
      <Projects>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CustomCard
            key={item}
            image={ProjectImage}
            overlayText='View Project'
            name='Cuxtomer'
            role='Frontend'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            onClick={handleOpenModal}
          />
        ))}
      </Projects>
    </div>
  )
}

export default AllProjects
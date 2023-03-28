import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CustomCard } from '..'
import ProjectImage from '../../assets/images/portfolio.jpg'

const ProjectContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '60px',
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const Projects = styled(Grid)(({ theme }) => ({
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

interface ProjectSectionProps {
  handleOpenModal: () => void
}

const ProjectSection = ({ handleOpenModal }: ProjectSectionProps) => {
  return (
    <ProjectContainer>
      <Typography variant='h2'>My Recents Works</Typography>
      <Projects>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CustomCard
            key={item}
            image={ProjectImage}
            name='Cuxtomer'
            role='Frontend'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            onClick={handleOpenModal}
          />
        ))}
      </Projects>
    </ProjectContainer>
  )
}

export default ProjectSection
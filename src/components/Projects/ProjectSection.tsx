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
  gap: '30px',
  padding: '80px',
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

const Projects = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  padding: '80px',
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

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <Typography variant='h2'>My Recents Works</Typography>
      <Projects>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CustomCard
            key={item}
            image={ProjectImage}
            name='Cuxtomer'
            role='Frontend Developer'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
        ))}
      </Projects>
    </ProjectContainer>
  )
}

export default ProjectSection
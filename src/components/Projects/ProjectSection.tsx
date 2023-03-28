import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CustomCard } from '..'
import ProjectImage from '../../assets/images/portfolio.jpg'
import { useToggle } from '@/hooks'


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


const ProjectSection = () => {
  const { isOpen: openModal, toggleOpen: setOpenModal } = useToggle(false)

  const handleOpenModal = () => {
    setOpenModal()
  }
  return (
    <ProjectContainer>
      {openModal && <div>Modal</div>}
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
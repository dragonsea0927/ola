import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CustomCard } from '..'
import ProjectImage from '../../assets/images/portfolio.jpg'
import { TabPanel, AllProjects, BackendProjects, FrontendProjects, FullstackProjects } from '@/components'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { tabs } from '@/utils'

const ProjectContainer = styled(Grid)(({ theme }) => ({
  width: '100vw',
  height: '100%',
  padding: '20px',
  h2: {
    fontSize: '60px',
    textAlign: 'center',
  },

  '.info': {
    fontSize: '16px',
    textAlign: 'center',
    color: 'gray',
    textTransform: 'uppercase',
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
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const switchComponent = (value: string) => {
    switch (value) {
      case 'all':
        return <AllProjects />
      case 'frontend':
        return <FrontendProjects />
      case 'backend':
        return <BackendProjects />
      case 'fullstack':
        return <FullstackProjects />
      default:
        return null
    }
  };

  return (
    <ProjectContainer>
      <Typography variant='body1' className='info'>Visit my portfolio for my latest projects</Typography>
      <Typography variant='h2'>My Recents Works</Typography>

      <Tabs
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            id={`scrollable-auto-tab-${tab.value}`}
            aria-controls={`scrollable-auto-tabpanel-${tab.value}`}
          />
        ))}
      </Tabs>

      {tabs.map((tab, index) => {
        const { label, value } = tab
        return (
          <TabPanel key={label} value={activeTab} index={index}>
            {switchComponent(value)}
          </TabPanel>
        )
      }

      )}

    </ProjectContainer >
  )
}

export default ProjectSection


  // <Projects>
  //   {[1, 2, 3, 4, 5, 6].map((item) => (
  //     <CustomCard
  //       key={item}
  //       image={ProjectImage}
  //       overlayText='View Project'
  //       name='Cuxtomer'
  //       role='Frontend'
  //       description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //       onClick={handleOpenModal}
  //     />
  //   ))}
  // </Projects>
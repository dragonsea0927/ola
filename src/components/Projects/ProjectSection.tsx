import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
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
        return <AllProjects handleOpenModal={handleOpenModal} />
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
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          width: '95%',
          margin: '20px auto',
          // m: 3,
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={tab.label}
            id={`scrollable-auto-tab-${tab.value}`}
            aria-controls={`scrollable-auto-tabpanel-${tab.value}`}
            sx={{
              width: '200px',
              minWidth: '100px',
              borderRadius: activeTab === index ? '5px' : '0px',
              backgroundColor: activeTab === index ? 'secondary.main' : 'transparent',
              color: activeTab === index ? 'white' : 'secondary.main',
              padding: '5px 10px',
            }}
          />
        ))}
      </Tabs>

      {tabs.map((tab, index) => {
        const { label, value } = tab
        return (
          <TabPanel
            key={label}
            value={activeTab}
            index={index}
          >
            {switchComponent(value)}
          </TabPanel>
        )
      }

      )}

    </ProjectContainer >
  )
}

export default ProjectSection
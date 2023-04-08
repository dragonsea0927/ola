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


const TabsStyle = styled(Tabs)(({ theme }) => ({
  width: '65%',
  margin: '30px auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },
}))

const TabStyle = styled(Tab)(({ theme }) => ({
  width: '220px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100px',
  borderRadius: '5px',
  backgroundColor: 'secondary.main',
  padding: '5px 10px',
  fontSize: '18px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  '&:hover': {
    color: 'text.primary',
  }
}))


const ProjectSection = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
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

      <TabsStyle
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((tab, index) => (
          <TabStyle
            key={tab.label}
            label={tab.label}
            id={`scrollable-auto-tab-${tab.value}`}
            aria-controls={`scrollable-auto-tabpanel-${tab.value}`}
            sx={{
              borderRadius: activeTab === index ? '5px' : '0px',
              backgroundColor: activeTab === index ? 'secondary.main' : 'transparent',
              color: activeTab === index ? 'white' : 'secondary.main',
            }}
          />
        ))}
      </TabsStyle>

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
'use client'

// import React from 'react'
// import { styled } from '@mui/material'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import { TabPanel, AllProjects, BackendProjects, FrontendProjects, FullstackProjects, CustomCard } from '@/components'
// import Tabs from '@mui/material/Tabs'
// import Tab from '@mui/material/Tab'
// import { tabs } from '@/utils'
// import { useMediaQuery } from '@/hooks'
// import { Projects } from './AllProjects'

// const ProjectContainer = styled(Grid)(({ theme }) => ({
//   width: '100vw',
//   padding: '20px',
//   h2: {
//     fontSize: '60px',
//     textAlign: 'center',
//   },

//   '.info': {
//     fontSize: '16px',
//     textAlign: 'center',
//     color: 'gray',
//     textTransform: 'uppercase',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: '16px',

//     '.info': {
//       fontSize: '12px',
//     },

//     h2: {
//       fontSize: '30px',
//       marginBottom: '10px',
//     }
//   },

//   [theme.breakpoints.up('md')]: {

//   },

//   [theme.breakpoints.up('lg')]: {

//   },

// }))


// const TabsStyle = styled(Tabs)(({ theme }) => ({
//   width: '65%',
//   margin: '30px auto',
//   [theme.breakpoints.down('sm')]: {
//     width: '90%',
//     '& .MuiTabs-flexContainer': {
//       flexWrap: 'wrap',
//     },
//   },

//   [theme.breakpoints.up('md')]: {
//     width: '90%',
//   },

//   [theme.breakpoints.up('lg')]: {
//     width: '65%',
//   },
// }))

// const TabStyle = styled(Tab)(({ theme }) => ({
//   width: '220px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minWidth: '100px',
//   borderRadius: '5px',
//   backgroundColor: 'secondary.main',
//   padding: '5px 10px',
//   fontSize: '18px',
//   fontWeight: 'bold',
//   textTransform: 'capitalize',
//   '&:hover': {
//     color: 'text.primary',
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     fontSize: '15px',
//   },
// }))


// const ProjectSection = ({ handleOpenModal, data }: { handleOpenModal: (id: string) => void, data: any }) => {
//   const [activeTab, setActiveTab] = React.useState(0);
//   const isMobile = useMediaQuery('(max-width: 600px)')

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setActiveTab(newValue);
//   };

//   const switchComponent = (value: string) => {
//     switch (value) {
//       case 'all':
//         return <AllProjects handleOpenModal={handleOpenModal} projects={data} />
//       case 'frontend':
//         return <FrontendProjects projects={data} handleOpenModal={handleOpenModal} />
//       case 'backend':
//         return <BackendProjects projects={data} handleOpenModal={handleOpenModal} />
//       case 'fullstack':
//         return <FullstackProjects projects={data} handleOpenModal={handleOpenModal} />
//       default:
//         return null
//     }
//   };

//   return (
//     <ProjectContainer data-aos="fade-up" data-aos-anchor-placement="top-center">
//       <Typography variant='body1' className='info' data-aos="fade-right">Visit my portfolio for my latest projects</Typography>
//       <Typography variant='h2' data-aos="fade-left">My Recents Works</Typography>

//       {isMobile && (
//         <Projects data-aos="fade-up" data-aos-duration="3000">
//           {data.map((project: any) => (
//             <CustomCard
//               key={project.id}
//               image={project.modalImgUrl}
//               overlayText='View Project'
//               name={project.name}
//               role={project.tag}
//               description={project.description}
//               onClick={() => handleOpenModal(project.id)}
//             />
//           )
//           )}
//         </Projects>
//       )}
//       {!isMobile && (
//         <div data-aos="fade-up" data-aos-duration="3000">
//           <TabsStyle
//             value={activeTab}
//             onChange={handleChange}
//             indicatorColor="primary"
//             textColor="inherit"
//             variant="scrollable"
//             scrollButtons="auto"
//             aria-label="scrollable auto tabs example"
//           >
//             {tabs.map((tab, index) => (
//               <TabStyle
//                 key={tab.label}
//                 label={tab.label}
//                 id={`scrollable-auto-tab-${tab.value}`}
//                 aria-controls={`scrollable-auto-tabpanel-${tab.value}`}
//                 sx={{
//                   borderRadius: activeTab === index ? '5px' : '0px',
//                   backgroundColor: activeTab === index ? 'secondary.main' : 'transparent',
//                   color: activeTab === index ? 'white' : 'secondary.main',
//                 }}
//               />
//             ))}
//           </TabsStyle>

//           {tabs.map((tab, index) => {
//             const { label, value } = tab
//             return (
//               <TabPanel
//                 key={label}
//                 value={activeTab}
//                 index={index}
//               >
//                 {switchComponent(value)}
//               </TabPanel>
//             )
//           }

//           )}</div>
//       )}

//     </ProjectContainer >
//   )
// }

// export default ProjectSection


import React, { useState } from 'react';
import { TabPanel, AllProjects, BackendProjects, FrontendProjects, FullstackProjects, CustomCard } from '@/components';
import { tabs } from '@/utils';
import { useToggle } from '@/hooks';
import { Project } from '@/types';

type props = {
  // handleOpenModal?: (id: string) => void;
  data: Project[];
};

const ProjectSection = ({ data }: props) => {
  const [activeTab, setActiveTab] = useState(0);
  const { isOpen: openModal, toggleOpen: setOpenModal } = useToggle(false)
  const [project, setProject] = useState({})

  const handleChange = (event: null, newValue: React.SetStateAction<number>) => {
    setActiveTab(newValue);
  };

  const handleOpenModal = (id: string) => {
    setOpenModal()
    // const project = data?.projects.find((item: Project) => item.id === id)
    // setProject(project || {})
  }

  const switchComponent = (value: string) => {
    switch (value) {
      case 'all':
        return <AllProjects data={data} handleOpenModal={handleOpenModal} />;
      case 'frontend':
        return <FrontendProjects projects={data} handleOpenModal={handleOpenModal} />;
      case 'backend':
        return <BackendProjects projects={data} handleOpenModal={handleOpenModal} />;
      case 'fullstack':
        return <FullstackProjects projects={data} handleOpenModal={handleOpenModal} />;
      default:
        return null;
    }
  };

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="md:px-2 pb-9 w-full mb-10">
      <div className="w-full flex flex-col gap-2">
        <p className="info text-[var(--textColor)] text-center text-base md:text-xl font-light" data-aos="zoom-in-up" data-aos-duration="8000">
          Visit my portfolio for my latest projects
        </p>
        <h1 className="text-2xl md:text-6xl text-center">
          My Recent Works
        </h1>

        <div data-aos="fade-up" data-aos-duration="3000" className='md:hidden lg:hidden flex flex-col gap-10 mt-5'>
          {data?.map((project: any) => (
            <CustomCard
              key={project.id}
              image={project.modalImgUrl}
              overlayText="View Project"
              name={project.name}
              role={project.tag}
              description={project.description}
              onClick={() => handleOpenModal(project.id)}
            />
          ))}
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className='hidden md:block'>
          <ul className="w-90p flex justify-center gap-5 mx-auto mt-10 md:mb-7 lg:mb-0">
            {tabs.map((tab, index) => (
              <li key={tab.label}>
                <button
                  onClick={() => handleChange(null, index)}
                  className={`px-4 py-2 border border-[var(--cta)] hover:bg-primary hover:text-white rounded-full ${activeTab === index ? 'bg-[var(--btnMode)] text-white' : 'text-primary'}`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {tabs.map((tab, index) => (
            <TabPanel key={tab.label} value={activeTab} index={index}>
              {switchComponent(tab.value)}
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

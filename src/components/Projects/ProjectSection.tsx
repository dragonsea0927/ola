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
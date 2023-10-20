// import React from 'react'
// import { CustomButton, CustomModal } from '..'
// import { styled, Grid, Typography } from '@mui/material'
// import Image from 'next/image'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkIcon from '@mui/icons-material/Link';
// import { Project } from '@/types'
// import { useMediaQuery } from '@/hooks';

// interface ProjectModalProps {
//   open: boolean
//   handleClose: (id: string) => void
//   project: Project
// }

// const ProjsctContent = styled(Grid)(({ theme }) => ({
//   width: '100%',
//   height: '100%',
//   display: 'grid',
//   gridTemplateColumns: 'repeat(2, 1fr)',
//   gap: '20px',
//   backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     height: '100%',
//     gridTemplateColumns: 'repeat(1, 1fr)',
//     gap: '0px',
//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

// }))

// const ProjectImage = styled('div')(({ theme }) => ({
//   img: {
//     width: '100%',
//     height: 408,
//     borderRadius: '10px',
//   },
//   [theme.breakpoints.down('sm')]: {
//     margin: '0px auto',
//     img: {
//       width: '100%',
//       height: '250px',
//       borderRadius: '8px',
//       alignSelf: 'center',
//     }

//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

// }))

// const ProjectDetails = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '10px',

//   h4: {
//     fontSize: '35px',
//     fontWeight: 600,
//     marginBottom: '18px',
//   },
//   button: {
//     '&:hover': {
//       transition: '0.4s',
//       transform: 'scale(1.04)',
//       zIndex: 1,
//       boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
//     },
//   },

//   p: {
//     fontSize: '18px',
//     lineHeight: '25px',
//     fontWeight: 400,
//     marginBottom: '18px',
//   },

//   div: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '20px',
//   },

//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     padding: '0px',

//     h4: {
//       fontSize: '25px',
//       fontWeight: 700,
//       marginBottom: '10px',
//       color: theme.palette.secondary.dark,
//     },

//     p: {
//       fontSize: '17px',
//       lineHeight: '25px',
//       fontWeight: 400,
//       marginBottom: '10px',
//       textAlign: 'justify',
//     },

//     '.stacks': {
//       fontSize: '15px',
//     },

//     '.btn-container': {
//       display: 'flex',
//       alignSelf: 'center',
//       button: {
//         fontSize: '14px',
//         padding: '10px',
//         fontWeight: 600,
//         width: 150,
//         height: 50,
//       },
//     },

//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

// }))

// const ProjectModal = ({ open, handleClose, project }: ProjectModalProps) => {
//   const isMobile = useMediaQuery('(max-width: 600px)')
//   return (

//     <CustomModal
//       open={open}
//       handleClose={() => { handleClose(project.id) }}
//       width={isMobile ? '100%' : '1230px'}
//       height={isMobile ? '90%' : '512px'}
//     >
//       <ProjsctContent>
//         <ProjectImage>
//           <Image
//             src={project.modalImgUrl}
//             alt='modal'
//             width={545}
//             height={408}
//           />
//         </ProjectImage>
//         <ProjectDetails>
//           <Typography variant='h6'
//             sx={{ textTransform: 'capitalize' }}
//           >{project.tag}</Typography>
//           <Typography variant='h4'>{project.name}</Typography>
//           <Typography variant='body1'>
//             {isMobile ? "Prompt engineering is not just about designing and developing prompts. It encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. It's an important skill to interface, build with, and understand capabilities of LLMs." : project.description}
//           </Typography>

//           <Typography variant='body1' className='stacks'>
//             Tech Stacks: {project.stacks.map((tech: string) => tech + ', ')}
//           </Typography>
//           <div className='btn-container'>
//             <CustomButton
//               variant='contained'
//               color='primary'
//               width='180px'
//               onClick={() => { }}
//             >
//               Live Demo <LinkIcon />
//             </CustomButton>

//             <CustomButton
//               variant='outlined'
//               color='primary'
//               width='180px'
//               onClick={() => { }}
//             >
//               Source Code <GitHubIcon />
//             </CustomButton>
//           </div>
//         </ProjectDetails>
//       </ProjsctContent>
//     </CustomModal>
//   )
// }

// export default ProjectModal
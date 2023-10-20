// import React from 'react'
// // import { Box, styled, IconButton } from '@mui/material'
// // import Grid from '@mui/material/Grid'
// // import Typography from '@mui/material/Typography'
// import { CustomButton } from '..'
// import { socialLinks } from '../../utils'
// import Link from 'next/link'
// import { TypeAnimation } from 'react-type-animation';

// const GridContainer = styled(Grid)(({ theme }) => ({
//   width: '100vw',
//   margin: '100px auto',
//   padding: '0px 20px',
//   gap: '30px',
//   position: 'relative',
//   [theme.breakpoints.down('sm')]: {
//     width: '100vw',
//     height: '75vh',
//     margin: '10px auto',
//     padding: '0px 10px',
//     gap: '40px',

//     h1: {
//       fontSize: '30px',
//     },

//     p: {
//       width: '100%',
//       textAlign: 'justify',
//       margin: 'auto',
//       color: theme.text.primary,
//     },
//   },

//   [theme.breakpoints.up('md')]: {
//     flexDirection: 'row',
//     padding: '0px 20px',
//     margin: '50px auto',
//     height: '68vh',

//     h1: {
//       fontSize: '80px',
//       marginTop: '50px',
//     },

//     '.intro': {
//       fontSize: '1.2rem',
//       color: 'gray',
//       width: '900px',
//       textAlign: 'center',
//       fontWeight: 300,
//     },
//   },

//   [theme.breakpoints.up('lg')]: {
//     height: '75vh',
//     flexDirection: 'column',
//     margin: '50px auto',
//     h1: {
//       fontSize: '120px',
//     }
//   },

// })

// )

// const GridItem = styled(Grid)(({ theme }) => ({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '30px',
//   margin: 'auto',
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     padding: '20px',
//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//     width: '90%',
//     h1: {
//       textAlign: 'center',
//     },
//     p: {
//       textAlign: 'center',
//       margin: 'auto',
//     },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//     width: '90%',
//     h1: {
//       textAlign: 'center',
//     },
//     p: {
//       textAlign: 'center',
//       padding: '10px 16px',
//     }
//   },
// }))

// const ButtonContainer = styled('div')(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '20px',
//   [theme.breakpoints.down('sm')]: {
//     display: 'flex',
//     justifyContent: 'center',
//     button: {
//       padding: '10px 15px',
//     }
//   },

//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//     justifyContent: 'center',
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '80px',
//   },
// }))

// const SocialMedia = styled('div')(({ theme }) => ({
//   display: 'flex',
//   gap: '15px',
//   padding: '0px 0px 16px 16px',
//   '& svg': {
//     fontSize: '2.5rem',
//     color: theme.palette.secondary.main,
//     transition: 'all 0.3s ease-in-out',
//     '&:hover': {
//       color: theme.palette.secondary.dark,
//       borderRadius: '50%',
//       transform: 'scale(1.2)',
//     }
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: 'none',
//     gap: '5px',
//     margin: '0 auto',
//     '& svg': {
//       fontSize: '2rem'
//     },
//   },

//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     position: 'fixed',
//     right: theme.spacing(1),
//     bottom: theme.spacing(12),
//     padding: '16px',
//   },
// }))


// const Hero = () => {
//   return (
//     <main spacing={2} data-aos="fade-up" data-aos-duration="3000">
//       <div item xs={12} sm={12} md={12}>
//         <h1>Hello { }
//           {"I'm"} <div sx={{ color: 'secondary.main' }}>Ola</div>,
//           <br />
//           <TypeAnimation
//             cursor={true}
//             sequence={['Software Developer', 500, 'Frontend Developer', 500, 'Backend Developer', 500, 'Technical Writer.', 500]}
//             repeat={Infinity}
//           />
//         </h1>
//         <p sx={{ width: { xs: '100%', sm: '100%', md: '50%' } }} className='intro' data-aos="zoom-in-up" data-aos-duration="8000">
//           Hi there! {"I'm"} a software developer based in Nigeria. I help businesses & startups to develop accessible, human-centered products that meet their {"customers'"} needs.

//         </p>
//         <ButtonContainer>
//           <CustomButton
//             variant='outlined'
//             color='secondary'
//             width='150px'
//             onClick={() => { console.log('clicked') }}
//           >My works</CustomButton>
//           <CustomButton
//             variant='contained'
//             color='secondary'
//             width='150px'
//             onClick={() => { console.log('clicked') }}
//           >Hire me</CustomButton>
//         </ButtonContainer>
//       </div>
//       <SocialMedia data-aos="fade-up" data-aos-duration="3000">
//         {socialLinks.map((link) => (
//           <Link
//             key={link.id}
//             href={link.path}
//             target='_blank'
//             rel='noopener noreferrer'
//             data-aos="zoom-in-up" data-aos-duration="8000"
//           >
//             <button
//               aria-label={link.title}
//             >
//               <link.icon />
//             </button>
//           </Link>
//         ))}
//       </SocialMedia>
//     </main>
//   )
// }

// export default Hero
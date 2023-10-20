// 'use client';

// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
// import Link from '@mui/material/Link';
// import { socialLinks } from '@/utils';
// import { Icons } from '@/components';


// const IconContainer = styled('div')(({ theme }) => ({
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: '8px',
//   marginBottom: '10px',
//   [theme.breakpoints.down('sm')]: {
//     gap: '5px',
//     flexDirection: 'column-reverse',

//     p: {
//       gap: '5px',
//       margin: '5px'
//     },

//   },
// }));

// const SocialIcons = styled('div')(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   [theme.breakpoints.down('sm')]: {
//     gap: '2px',
//   }
// }));

// export default function Copyright() {
//   return (
//     <IconContainer>
//       <Typography variant="body2" align="center">
//         {'Copyright © '}
//         <Link href="https://www.linkedin.com/in/ola-ishola/"
//           color="inherit"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ textDecoration: 'none' }}
//         >
//           Ola Ishola
//         </Link>{' '}
//         {new Date().getFullYear()}
//       </Typography>
//       <Typography variant="body2" align="center" sx={{ display: { xs: 'none', md: 'block' } }}>
//         |
//       </Typography>

//       <SocialIcons>
//         {socialLinks.map((link) => (
//           <Icons link={link} key={link.id} />
//         ))}
//       </SocialIcons>
//     </IconContainer>
//   );
// }
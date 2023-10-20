'use client';

import React from 'react';
import { navItems } from '@/utils';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Link from 'next/link'
import AdminRoutes from './AdminRoutes';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { FaThreads } from 'react-icons/fa6';


export default function TopNav() {
  const routePath = usePathname();
  const isActive = (pathname: string) => routePath === pathname;
  return (
    <div className='flex items-center justify-between h-[100px]'>
      <div className='flex gap-3 flex-1'>
        <Logo />
      </div>
      <div className='hidden lg:flex gap-3 flex-1'>
        <FaLinkedinIn className='w-6 h-6' />
        <FaXTwitter className='w-6 h-6' />
        <FaMediumM className='w-6 h-6' />
        <FaInstagram className='w-6 h-6' />
        <FaHashnode className='w-6 h-6' />
        <FaThreads className='w-6 h-6' />
      </div>
      <div className='flex flex-2 md:flex-1 gap-4 items-center text-base'>
        <ThemeToggle />
        <Link href='/' className='hidden md:block'>Home</Link>
        <Link href='/' className='hidden md:block'>Portfolio</Link>
        <Link href='/' className='hidden md:block'>Blogs</Link>
        <Link href='/' className='hidden md:block'>Contact</Link>
        <Link href='/' className='hidden md:block'>About</Link>
        <AdminRoutes />
      </div>
    </div>
  )
}


// const TopNavContainer = styled('div')(({ theme }) => ({
//   fontWeight: 400,
//   fontSize: '1.1rem',
//   letterSpacing: '0.1rem',
//   '& a': {
//     color: theme.palette.secondary.light,
//     textDecoration: '',
//     '&:hover': {
//       color: theme.palette.secondary.main,
//       textDecoration: 'underline',
//     },
//   },
// }));

// const drawerWidth = 150;

// const TopNav = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [activeLink, setActiveLink] = React.useState('');
//   const routePath = usePathname();
//   const isActive = (pathname: string) => routePath === pathname;

//   const { data: session, status } = useSession();

//   React.useEffect(() => {
//     const path = window.location.pathname;
//     setActiveLink(path);
//   }, []);

//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setActiveLink(path);
//   };

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const theme = useAppTheme();

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         <Logo />
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.id} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center', cursor: 'pointer' }}
//               onClick={() => {
//                 handleNavigation(item.path);
//                 scrollToViewMethod(item.link as string);
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}
//               >
//                 <item.icon sx={{ fontSize: '1.5rem' }} />
//                 {session && status === 'authenticated' ? (
//                   <>
//                     {<AdminRoutes session={session} isActive={isActive} signOut={signOut} />}
//                   </>
//                 ) : (
//                   <>
//                     {item.title}
//                   </>
//                 )}
//               </Box>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box >
//   );

//   return (
//     <TopNavContainer>
//       <AppBar component="nav" sx={{
//         backgroundColor: '#ecf3f3',
//         color: theme.text.primary,
//         boxShadow: 'none',
//         [theme.breakpoints.down('sm')]: {
//           backgroundColor: 'white',
//         }
//       }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon sx={{ fontSize: '2rem', color: theme.palette.secondary.dark }} />
//           </IconButton>
//           <Typography
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Logo />
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {session && status === 'authenticated' && (
//               <>
//                 {<AdminRoutes session={session} isActive={isActive} signOut={signOut} />}
//               </>
//             )}
//             <Box sx={{ display: 'flex', gap: '40px' }}>
//               {!session && navItems.map((item) => (
//                 <ListItem key={item.id}
//                   disablePadding sx={{
//                     borderBottom: activeLink === item.path ? `2px solid ${theme.palette.secondary.main}` : ''
//                   }}>
//                   <ListItemButton sx={{
//                     color: activeLink === item.path ? theme.palette.secondary.main : theme.text.primary,
//                     fontWeight: 500,
//                     fontSize: '17px',
//                     letterSpacing: '0.1rem',
//                     textTransform: 'capitalize',
//                     padding: '4px',

//                     '&:hover': {
//                       color: theme.palette.secondary.main,
//                       backgroundColor: 'transparent',
//                       '&[data-active="true"]': {
//                         color: theme.palette.secondary.main,
//                         textDecoration: 'underline',
//                       },
//                     },
//                   }}
//                     onClick={() => {
//                       scrollToViewMethod(item.link as string);
//                       handleNavigation(item.path)
//                     }
//                     }
//                   >
//                     {item.title}
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#ecf3f3', color: theme.text.dark, textTransform: 'capitalize' },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </TopNavContainer>
//   )
// }

// export default TopNav
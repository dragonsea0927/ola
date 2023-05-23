import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, styled, Toolbar, Typography } from '@mui/material';
import { useAppTheme, useNavigation } from '@/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '@/utils';
import { signOut, useSession } from 'next-auth/react';
import AdminRoutes from './AdminRoutes';
import { scrollToViewMethod } from '@/utils';
import Logo from './Logo';


const TopNavContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: theme.white.main,
  fontWeight: 400,
  fontSize: '1.1rem',
  letterSpacing: '0.1rem',
  '& a': {
    color: theme.palette.secondary.light,
    textDecoration: '',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
}));

const drawerWidth = 150;

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { navigate, router } = useNavigation();
  const [activeLink, setActiveLink] = React.useState('');
  const isActive = (pathname: string) => router.pathname === pathname;

  const { data: session, status } = useSession();

  React.useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveLink(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = useAppTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', cursor: 'pointer' }}
              onClick={() => {
                handleNavigation(item.path);
                scrollToViewMethod(item.link as string);
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <item.icon sx={{ fontSize: '1.5rem' }} />
                {session && status === 'authenticated' ? (
                  <>
                    {<AdminRoutes session={session} isActive={isActive} signOut={signOut} />}
                  </>
                ) : (
                  <>
                    {item.title}
                  </>
                )}
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  return (
    <TopNavContainer>
      <AppBar component="nav" sx={{ backgroundColor: theme.white.main, color: theme.text.primary }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Logo />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {session && status === 'authenticated' && (
              <>
                {<AdminRoutes session={session} isActive={isActive} signOut={signOut} />}
              </>
            )}
            <Box sx={{ display: 'flex', gap: '40px' }}>
              {!session && navItems.map((item) => (
                <ListItem key={item.id} 
                disablePadding sx={{ 
                  borderBottom: activeLink === item.path ? `2px solid ${theme.palette.secondary.main}` : ''}}>
                  <ListItemButton sx={{
                    color: activeLink === item.path ? theme.palette.secondary.main : theme.text.primary,
                    fontWeight: 500,
                    fontSize: '17px',
                    letterSpacing: '0.1rem',
                    textTransform: 'capitalize',
                    padding: '4px',
                    
                    '&:hover': {
                      color: theme.palette.secondary.main,
                      backgroundColor: 'transparent',
                      '&[data-active="true"]': {
                        color: theme.palette.secondary.main,
                        textDecoration: 'underline',
                      },
                    },
                  }}
                    onClick={() => {
                      scrollToViewMethod(item.link as string);
                      handleNavigation(item.path)
                    }
                    }
                  >
                    {item.title}
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: theme.palette.primary.dark, color: theme.text.dark, textTransform: 'capitalize' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </TopNavContainer>
  )
}

export default TopNav
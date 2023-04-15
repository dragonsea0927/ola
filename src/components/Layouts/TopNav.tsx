import React from 'react'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, styled, Toolbar, Typography } from '@mui/material';
import { useAppTheme, useNavigation } from '@/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '@/utils';
import { signOut, useSession } from 'next-auth/react';
import AdminRoutes from './AdminRoutes';

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
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = useAppTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        OI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', cursor: 'pointer' }}
              onClick={() => handleNavigation(item.path)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.1rem' }}
          >
            Oi
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {session && status === 'authenticated' && (
              <>
                {<AdminRoutes session={session} isActive={isActive} signOut={signOut} />}
              </>
            )}
            {!session && navItems.map((item) => (
              <Button key={item.id} sx={{
                color: activeLink === item.path ? theme.palette.secondary.main : theme.text.primary,
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.1rem',
                textTransform: 'capitalize',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  textDecoration: 'underline',
                  pddingBottom: '5px',
                },

                textDecoration: activeLink === item.path ? 'underline' : 'none',
              }}
                onClick={() => handleNavigation(item.path)}
              >
                {item.title}
              </Button>
            ))}
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
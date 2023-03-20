import React from 'react'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Toolbar, Typography } from '@mui/material';
import { useAppTheme } from '@/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '../../utils';
import Link from 'next/link'

const TopNavContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: theme.white.main,
  fontWeight: 400,
  fontSize: '1.1rem',
  letterSpacing: '0.1rem',
  '& a': {
    color: theme.palette.secondary.light,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}));

const drawerWidth = 150;

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useAppTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Oish
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} sx={{ color: theme.white.main }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <TopNavContainer>
      <AppBar component="nav" sx={{ backgroundColor: theme.white.main, color: theme.text.primary, boxShadow: 'none', border: '1px solid red' }}>
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
            Oish
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id}>
                <Link href={item.path} style={{ color: theme.text.dark, fontWeight: 400, fontSize: '1.1rem', letterSpacing: '0.1rem' }}>{item.title}</Link>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: theme.palette.primary.light, color: theme.text.primary },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </TopNavContainer>
  )
}

export default TopNav
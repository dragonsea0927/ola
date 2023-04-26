import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton, styled } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,

  '& svg': {
    transition: 'all 0.3s ease-in-out',
    fontSize: '3rem',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.dark,
      border: `1px solid ${theme.palette.secondary.dark}`,
      borderRadius: '50%',
      transform: 'scale(1.2)',
    }
  },
}));

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = React.useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);


  const scrollTop = () => {
    scroll.scrollToTop();
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  return (
    <ScrollToTopContainer>
      <IconButton onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        <ArrowCircleUpIcon />
      </IconButton>
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
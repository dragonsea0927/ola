import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton, styled } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
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
        <ArrowCircleUpIcon sx={{ fontSize: '3rem', color: 'secondary.main' }} />
      </IconButton>
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
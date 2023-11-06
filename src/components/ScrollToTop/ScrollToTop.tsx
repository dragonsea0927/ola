'use client';

import React, { useState, useEffect } from 'react';
import { MdOutlineArrowCircleUp as ArrowCircleUpIcon } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const scrollTop = React.useCallback(() => {
    scroll.scrollToTop();
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
        setAtTop(false);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
        setAtTop(true);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);


  return (
    <div
      style={{ position: 'fixed', bottom: '2rem', right: '4rem', zIndex: 10 }}
    >
      <ArrowCircleUpIcon
        onClick={scrollTop}
        style={{
          display: showScroll ? 'flex' : atTop ? 'flex' : 'none',
          transform: atTop ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
        }}
        className='transition-all duration-300 ease-in-out text-5xl text-[var(--cta)] hover:bg-[var(--primary)] hover:text-[var(--ctaText)] cursor-pointer rounded-full'
      />
    </div>
  );
};

export default ScrollToTop;

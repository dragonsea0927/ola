import React from 'react';
import { styled } from '@mui/material';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { LayoutProps } from '@/types';
import { ScrollProgress } from '@/components'


const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: '40px',

  '.progressbar': {
    position: 'fixed',
    left: 0,
    right: 0,
    height: '5px',
    background: '#087ea4',
    transformOrigin: ' 0 %',
    transform: 'scaleX(0)',
    zIndex: 9999,
  }
}));

const LayoutContent = styled('main')({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
});


export default function Layout(props: LayoutProps) {
  return (
    <LayoutRoot>
      <TopNav />
      <LayoutContent>
      <ScrollProgress className='progressbar' />
        {props.children}
      </LayoutContent>
      <BottomNav />
    </LayoutRoot>
  );
}

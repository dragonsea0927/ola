import React from 'react';
import { styled } from '@mui/material';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { LayoutProps } from '@/types';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: '40px',
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
      <LayoutContent>{props.children}</LayoutContent>
      <BottomNav />
    </LayoutRoot>
  );
}

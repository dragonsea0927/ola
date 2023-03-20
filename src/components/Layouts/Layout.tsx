import React from 'react';
import { styled } from '@mui/material';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { LayoutProps } from '@/types';

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  gap: '40px',
}));

const LayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
}))

const LayoutContainer = styled('div')({
  display: 'flex',
  overflow: 'hidden',
  padding: '0px 20px',
  height: '100%',
  border: '1px solid red',
});

const LayoutContent = styled('div')({
  height: '100%',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
});


export default function Layout(props: LayoutProps) {
  return (
    <LayoutRoot>
      <TopNav />
      <LayoutWrapper>
        <LayoutContainer>
          <LayoutContent>{props.children}</LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
      <BottomNav />
    </LayoutRoot>
  );
}

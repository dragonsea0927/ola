// import React from 'react';
import TopNav from './TopNav';
// import BottomNav from './BottomNav';
import { LayoutProps } from '@/types';
import { ScrollProgress } from '@/components'


export default function Layout(props: LayoutProps) {
  return (
    <main className=''>
      <TopNav />
      <div className='flex flex-col overflow-hidden gap-10'>
        <ScrollProgress
          className='progressbar' />
        {props.children}
      </div>
      {/* <BottomNav /> */}
    </main>
  );
}

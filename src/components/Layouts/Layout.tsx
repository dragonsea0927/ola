import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { LayoutProps } from '@/types';
import { ScrollProgress, ScrollToTop } from '@/components'


export default function Layout(props: LayoutProps) {
  return (
    <main className='w-full'>
      <TopNav />
      <div className='flex flex-col overflow-hidden gap-10'>
        <ScrollProgress className='progressbar' />
        {props.children}
      </div>
      <BottomNav />
      <ScrollToTop />
    </main>
  );
}

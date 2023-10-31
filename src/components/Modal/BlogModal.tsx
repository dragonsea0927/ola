import React from 'react';
import CustomModal from './CustomModal';
import { useMediaQuery } from '@/hooks';
import Link from 'next/link';

interface BlogModalProps {
  open: boolean;
  handleClose: any;
  blogItem: any;
}

const BlogModal = ({ open, handleClose, blogItem }: BlogModalProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const { title, categories, pubDate, content } = blogItem;

  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      width={isMobile ? '100vw' : isTablet ? '80vw' : '60vw'}
      height={isMobile ? '100vh' : isTablet ? '80vh' : '60vh'}
    >
      <div className="grid grid-cols-1 gap-5 md:p-3 w-full h-full bg-gradient-to-br from-blue-100 to-white border border-red-600"
      >
        <div className="p-2 md:p-3 w-full overflow-y-auto">
          <h4 className="font-bold text-xl md:text-3xl text-center text-dark mb-2">{title}</h4>
          <p className='hidden md:block ml-4 font-semibold'>
            Published: {pubDate}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="contents"
          ></div>
          <div className="tags flex flex-wrap gap-2">
            {categories?.map((category: string) => (
              <span
                key={category}
                className="px-2 py-1 text-white bg-red-500 rounded text-sm"
              >
                {category}
              </span>
            ))}
          </div>
          <Link
            href={blogItem?.link || ''}
            className="link text-blue-500 hover:text-primary text-lg"
            target="_blank"
            rel="noopener"
          >
            Continue to other articles...
          </Link>
        </div>
      </div>
    </CustomModal>
  );
}

export default BlogModal;

'use client';

import React from 'react'
import Link from 'next/link'
import { randomItemFromArray, readTimeInfo } from '@/utils'
import { ScrollToView, CustomCard } from '@/components'
// import { useMediaQuery } from '@/hooks'


// const BlogMainContainer = styled('div')(({ theme }) => ({
//   width: '100%',
//   height: '100%',
//   backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,
//   padding: '20px',

//   h1: {
//     fontSize: '60px',
//     textAlign: 'center',
//   },

//   '.blog-info': {
//     fontSize: '16px',
//     textAlign: 'center',
//     color: 'gray',
//     textTransform: 'uppercase',
//   },

//   '.blogs': {
//     fontSize: '18px',
//     color: theme.text.dark,
//   },
//   [theme.breakpoints.down('sm')]: {

//     h1: {
//       fontSize: '30px',
//     },

//     '.blog-info': {
//       fontSize: '12px',
//     },

//     '.blogs': {
//       marginTop: theme.spacing(2),
//       fontSize: '14px',
//       alignItems: 'start',
//     },
//   },

//   [theme.breakpoints.up('md')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },

//   [theme.breakpoints.up('lg')]: {
//     display: { xs: 'none', sm: 'none', md: 'block' },
//   },
// }))

// const BlogsContents = styled(Grid)(({ theme }) => ({
//   width: '100%',
//   display: 'grid',
//   gap: '20px',
//   height: '100%',
//   backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,

//   [theme.breakpoints.down('sm')]: {
//     gridTemplateColumns: 'repeat(1, 1fr)',
//     padding: '10px',
//     gap: '30px'
//   },

//   [theme.breakpoints.up('md')]: {
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     padding: '20px',
//   },

//   [theme.breakpoints.up('lg')]: {
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     padding: '80px',
//   },
// }))

interface BlogSectionProps {
  handleOpenBlogModal: any
  data: any
}


const BlogSection = ({ handleOpenBlogModal, data }: BlogSectionProps) => {
  // const blogs = await getProjects()
  const sliceData = data?.items ? data.items.slice(0, 3) : []
  // const isMobile = useMediaQuery('(max-width: 960px)')
  const mobileSlicedData = data?.items ? data.items.slice(0, 4) : []

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      {/* <ScrollToView to='blogs' > */}
      <div>
        <p className='blog-info' data-aos="fade-up">Check some of my Technical articles</p>
        <h1 data-aos="fade-up">Recent Articles</h1>
        <div className=''>
          <div className='hidden md:block'>
            {sliceData.map((item: any, index: number) => {
              const tags = item?.categories ? randomItemFromArray(item.categories, 5) : ''
              return (
                < CustomCard
                  key={item.guid}
                  image={item?.thumbnail}
                  overlayText='Read More'
                  name={tags || 'No tags'}
                  duration={readTimeInfo(item.content)}
                  description={item.title}
                  onClick={() => handleOpenBlogModal(item)}
                />
              )
            })}
          </div>
          <div className='md:hidden'>
            {mobileSlicedData.map((item: any, index: number) => {
              const tags = item?.categories ? randomItemFromArray(item.categories, 5) : ''
              return (
                < CustomCard
                  key={item.guid}
                  image={item?.thumbnail}
                  overlayText='Read More'
                  name={tags || 'No tags'}
                  duration={readTimeInfo(item.content)}
                  description={item.title}
                  onClick={() => handleOpenBlogModal(item)}
                />
              )
            }
            )}
          </div>
        </div>
        <p className='blogs' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">To view more of my articles, click <Link href='/blogs'>here</Link>
        </p>
      </div>
      {/* </ScrollToView> */}
    </div>
  )
}

export default BlogSection
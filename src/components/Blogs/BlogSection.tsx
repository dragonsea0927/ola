import React from 'react'
import { styled, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { randomItemFromArray, readTimeInfo } from '@/utils'
import { ScrollToView, CustomCard } from '@/components'
import { useMediaQuery } from '@/hooks'


const BlogMainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,
  padding: '20px',

  h1: {
    fontSize: '60px',
    textAlign: 'center',
  },

  '.blog-info': {
    fontSize: '16px',
    textAlign: 'center',
    color: 'gray',
    textTransform: 'uppercase',
  },

  '.blogs': {
    fontSize: '18px',
    color: theme.text.dark,
  },
  [theme.breakpoints.down('sm')]: {

    h1: {
      fontSize: '30px',
    },

    '.blog-info': {
      fontSize: '12px',
    },

    '.blogs': {
      marginTop: theme.spacing(2),
      fontSize: '14px',
      alignItems: 'start',
    },
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },
}))

const BlogsContents = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gap: '20px',
  height: '100%',
  backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '10px',
    gap: '30px'
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '20px',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    padding: '80px',
  },
}))

interface BlogSectionProps {
  handleOpenBlogModal: any
  data: any
  isLoading: boolean
}

const BlogSection = ({ handleOpenBlogModal, data, isLoading }: BlogSectionProps) => {
  const sliceData = data?.items ? data.items.slice(0, 3) : []
  const isResponsive = useMediaQuery('(max-width: 960px)')
  // console.log('isResponsive', isResponsive)

  return (
    <div>
      <ScrollToView to='blogs' >
        <BlogMainContainer
        >
          <Typography variant='body1' className='blog-info'>Check some of my Technical articles</Typography>
          <Typography variant='h1'>Recent Articles</Typography>
          <BlogsContents>
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
          </BlogsContents>
          <Typography variant='body1' className='blogs '>To view more of my articles, click <Link href='/blogs'>here</Link>
          </Typography>
        </BlogMainContainer>
      </ScrollToView>
    </div>
  )
}

export default BlogSection
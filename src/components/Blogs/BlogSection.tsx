import React from 'react'
import { styled, Grid, Typography } from '@mui/material'
import { CustomCard } from '..'
import ProjectImage from '../../assets/images/portfolio.jpg'
import Link from 'next/link'
import { useFetch } from '@/hooks'
import { randomItemFromArray } from '@/utils'

const BlogMainContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '80px',
  backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '10px',
    gap: '30px'
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },
}))

interface BlogSectionProps {
  handleOpenBlogModal: () => void
}

const BlogSection = ({ handleOpenBlogModal }: BlogSectionProps) => {
  const url = process.env.NEXT_PUBLIC_MEDIUM_API_URL || ''
  const { data, isLoading, isError } = useFetch(url)


  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong...</div>

  const sliceData = data.items ? data.items.slice(0, 3) : []

  return (
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
              image={ProjectImage}
              overlayText='Read More'
              name={tags || 'No tags'}
              duration={item.duration || '5+ min'}
              description={item.title}
              onClick={handleOpenBlogModal}
            />
          )
        })}
      </BlogsContents>
      <Typography variant='body1' className='blogs '>To view more of my articles, click <Link href='https://dev.to/'>here</Link>
      </Typography>
    </BlogMainContainer>
  )
}

export default BlogSection
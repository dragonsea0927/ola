import React from 'react'
import { CustomButton, CustomModal } from '..'
import { styled, Grid, Typography, Box } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link';
import DOMPurify from 'dompurify';
import Link from 'next/link';

interface BlogModalProps {
  open: boolean
  handleClose: any
  blogItem: any
}

const BlogContent = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,
  padding: 10,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const BlogDetails = styled('div')(({ theme }) => ({
  padding: '10px',

  h4: {
    fontSize: '23px',
    fontWeight: 600,
    marginBottom: '18px',
    alignText: 'center',
  },

  a: {
    padding: '0px',
    color: '#FF024F',
    textAlign: 'left',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },

  p: {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 400,
    marginBottom: '18px',
  },


  div: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    color: theme.text.dark,

    img: {
      width: '100%',
      height: '510px',
      borderRadius: '10px',
      objectFit: 'cover',
      border: '1px solid red',
    },

    li: {
      fontSize: '18px',
      lineHeight: '25px',
      fontWeight: 400,
      marginBottom: '18px',
    },
  },

  '.tags': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const ProjectModal = ({ open, handleClose, blogItem }: BlogModalProps) => {

  const { title, categories, pubDate, content } = blogItem
  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      width='1000px'
      height='700px'
    >
      <BlogContent>
        <BlogDetails>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body1'>
            {pubDate}
          </Typography>
          <Box dangerouslySetInnerHTML={{ __html: content }} />

          <Box className='tags'>
            {categories.map((category: string) => (
              <Box key={category}
                sx={{
                  listStyle: 'none',
                  width: 'fit-content',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  backgroundColor: '#FF024F',
                  color: 'white',
                  fontSize: '16px',
                }} component='li'>
                {category}
              </Box>
            ))}
          </Box>
          <Link href='https://medium.com/@olaishola' target='_blank' rel='noopener'>
            Continue to other articles...<LinkIcon />
          </Link>
        </BlogDetails>
      </BlogContent>
    </CustomModal>
  )
}

export default ProjectModal
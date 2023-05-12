import React from 'react'
import { CustomModal } from '..'
import { styled, Grid, Typography, Box } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks';

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
    padding: '0px',
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
    fontWeight: 700,
    color: theme.text.dark,
    fontSize: '24px',
  },

  '.link': {
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

    li: {
      listStyle: 'none',
      width: 'fit-content',
      padding: '5px 10px',
      borderRadius: '5px',
      backgroundColor: '#FF024F',
      color: 'white',
      fontSize: '16px',
    }
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    overflowY: 'auto',

    'h4:first-of-type': {
      display: 'none',
    },

    h4: {
      fontWeight: 700,
      color: theme.text.dark,
      fontSize: '20px',
    },

    div: {

      img: {
        width: '100% !important',
        height: '200px !important',
        borderRadius: '8px',
        objectFit: 'fill !important',
        margin: '0px auto !important',
      },

      li: {
        fontSize: '16px',
        lineHeight: '25px',
        fontWeight: 400,
        marginBottom: '18px',
      },
    },


    '.contents': {
      width: '100% !important',
      margin: '0px auto',

      pre: {
        width: '100% !important',
        height: 'auto !important',
        overflowX: 'auto !important',
        overflowY: 'auto !important',
        backgroundColor: '#fff !important',
        padding: '10px !important',
        wordBreak: 'break-all !important',
        whiteSpace: 'pre-wrap !important',
        wordWrap: 'break-word !important',
        fontSize: '12px !important',
        margin: '0px auto !important',
        borderRadius: '8px !important',
      },

      p: {
        fontSize: '16px',
        lineHeight: '25px',
        fontWeight: 400,
        color: theme.text.dark,
      },
    },

    '.tags': {

      li: {
        width: 'fit-content',
        padding: '5px 10px',
        fontSize: '14px',
      },
    },
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
    overflowX: 'hidden',
  },

}))

const ProjectModal = ({ open, handleClose, blogItem }: BlogModalProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const { title, categories, pubDate, content } = blogItem
  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      width={isMobile ? '100%' : '1000px'}
      height={isMobile ? '85%' : '700px'}
    >
      <BlogContent>
        <BlogDetails>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body1' sx={{ display: isMobile ? 'none' : 'block' }}>
            Published: {pubDate}
          </Typography>
          <Box dangerouslySetInnerHTML={{ __html: content }} className='contents' />

          <Box className='tags'>
            {categories.map((category: string) => (
              <Box key={category}
                sx={{

                }} component='li'>
                {category}
              </Box>
            ))}
          </Box>
          <Link className='link' href='https://medium.com/@olaishola' target='_blank' rel='noopener'>
            Continue to other articles...<LinkIcon />
          </Link>
        </BlogDetails>
      </BlogContent>
    </CustomModal>
  )
}

export default ProjectModal
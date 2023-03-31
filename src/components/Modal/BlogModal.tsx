import React from 'react'
import { CustomButton, CustomModal } from '..'
import { styled, Grid, Typography, Box } from '@mui/material'
import ModalImg from '../../assets/images/modalpic.jpeg'
import Image from 'next/image'
import LinkIcon from '@mui/icons-material/Link';
import { useFetch } from '@/hooks'

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

const BlogImage = styled('div')(({ theme }) => ({
  paddingTop: '10px',
  display: 'grid',
  gap: '15px',
  img: {
    width: 880,
    height: 500,
    borderRadius: '10px',
    objectFit: 'cover',
    justifySelf: 'center',
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

const BlogDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  padding: '10px',
  // width: '100%',
  border: '1px solid #e2e8ec',

  h4: {
    fontSize: '35px',
    fontWeight: 600,
    marginBottom: '18px',
  },
  button: {
    border: 'none',
    boxShadow: 'none',
    padding: '0px',
    color: '#FF024F',
    textAlign: 'left',
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
    width: '100%',
    border: '1px solid red',
    padding: '10px',
    color: theme.text.dark,

    img: {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      objectFit: 'cover',
    }
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

  const { title, thumbnail, categories, pubDate, link, content, description } = blogItem
  console.log(blogItem);

  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      width='1000px'
      height='700px'
    >
      <BlogContent>
        {/* <BlogImage>
          <Image src={thumbnail} alt='modal' width={100} height={100} />
        </BlogImage> */}
        <BlogDetails>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body1'>
            {pubDate}
          </Typography>
          <Box dangerouslySetInnerHTML={{ __html: content }} />
          <CustomButton
            variant='text'
            color='primary'
            width='190px'
            onClick={() => { }}
          >
            Continue Reading...<LinkIcon />
          </CustomButton>
        </BlogDetails>
      </BlogContent>
    </CustomModal>
  )
}

export default ProjectModal
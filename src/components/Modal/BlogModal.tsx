import React from 'react'
import { CustomButton, CustomModal } from '..'
import { styled, Grid, Typography } from '@mui/material'
import ModalImg from '../../assets/images/modalpic.jpeg'
import Image from 'next/image'
import LinkIcon from '@mui/icons-material/Link';

interface ProjectModalProps {
  open: boolean
  handleClose: () => void
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
    width: 850,
    height: 500,
    borderRadius: '10px',
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
    flexDirection: 'row',
    gap: '20px',
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

const ProjectModal = ({ open, handleClose }: ProjectModalProps) => {
  return (

    <CustomModal
      open={open}
      handleClose={handleClose}
      width='1000px'
      height='700px'
    >
      <BlogContent>
        <BlogImage>
          <Image src={ModalImg} alt='modal' />
          <Typography variant='body1'>
            12th July 2021
          </Typography>
        </BlogImage>
        <BlogDetails>
          <Typography variant='h4'>Coral Task Manager</Typography>
          <Typography variant='body1'>
            Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
          </Typography>

          <Typography variant='body1'>
            Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id.

            Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.
          </Typography>

          <Typography variant='body1'>
            Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et.
          </Typography>

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
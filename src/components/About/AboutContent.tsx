import React from 'react'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import { About } from '@/types'

interface Props {
  content: About[]
}

const AboutContent = (props: Props) => {
  const { content } = props
  const { intro, title, transitionOne, transitionTwo, focused, hobbies } = content[0]
  return (
    <>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='body1'>
        {intro}
      </Typography>

      <Typography variant='body1'>
        {focused}
      </Typography>

      <Typography variant='body1'>
        {transitionOne}
      </Typography>

      <Typography variant='body1' data-aos="zoom-in-up">
        {transitionTwo}
      </Typography>

      <Typography variant='body1' data-aos="zoom-in-up">
        {hobbies}
      </Typography>

    </>
  )
}

export default AboutContent
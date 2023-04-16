import { Project } from '@/types'
import React from 'react'
import Draft from './Draft'
import { styled } from '@mui/material/styles'

interface Props {
  projects: Project[]
}

const StyledDrafts = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  border: '1px solid red',
  padding: '20px',
}))


const Drafts = ({ projects }: Props) => {
  return (
    <StyledDrafts>
      {projects.map((project) => (
        <Draft key={project?.id} project={project} />
      ))}
    </StyledDrafts>
  )
}

export default Drafts
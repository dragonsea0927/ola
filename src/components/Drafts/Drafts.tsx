import { Project } from '@/types'
import React from 'react'
import Draft from './Draft'
import { styled } from '@mui/material/styles'

interface Props {
  projects: Project[]
}

const StyledDrafts = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  padding: '20px',
  gridTemplateColumns: 'repeat(3, 430px)',
  gridGap: '20px',
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
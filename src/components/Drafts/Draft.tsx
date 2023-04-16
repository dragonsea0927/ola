import { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styled } from '@mui/material/styles'

type Props = {
  project: Project
}

const StyledDraft = styled('div')(({ theme }) => ({
  width: '500px',
  gap: '20px',
  border: '1px solid red',
}))

const Draft = ({ project }: Props) => {
  return (
    <StyledDraft>
      <Image
        src={project?.coverImgUrl}
        alt={project?.coverImgUrl}
        width={400}
        height={300}
      />
      <div>
        <h1>{project?.name}</h1>
        <span>{project?.tag}</span>
      </div>
      <p>{project?.description}</p>
      <p>{project?.createdAt}</p>

      <Link href={project?.githubUrl}>Source</Link>
      <Link href={project?.liveUrl}>Live</Link>
    </StyledDraft>
  )
}

export default Draft
'use client';

import { useTogglePublish } from '@/hooks';
import React from 'react'

export default function ConditionalHeader({ project }: any) {
  const { name } = project;
  const { published } = useTogglePublish({
    id: project?.id, initialState: project?.published
  });
  return (
    <>
      <h4
        className='text-[var(--textColor)] text-4xl font-semibold capitalize mb-4'
      >{!published ? `${name} (Draft)` : name}</h4>
    </>
  )
}

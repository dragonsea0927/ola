'use client';

import { useTogglePublish } from '@/hooks';
import React from 'react'

export default function ConditionalHeader({ project }: any) {
  const { published } = useTogglePublish({
    id: project?.id, initialState: project?.published
  });
  return (
    <>
      <h4
        className='text-[var(--textColor)] text-4xl font-semibold capitalize mb-4'
      >{!published ? `${project?.name} (Draft)` : project?.name}</h4>
    </>
  )
}

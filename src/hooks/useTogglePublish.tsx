'use client';

import React from 'react'
import { publishProject } from '@/utils';
import { tailwindToast } from '@/components/Toast/Toast';

type Props = {
  id: string;
  initialState: boolean;
}

const useTogglePublish = ({ id, initialState }: Props) => {
  const [published, setPublished] = React.useState<boolean>(initialState);

  const togglePublish = async () => {
    const res = await publishProject(id, `${process.env.NEXT_PUBLIC_API_URL}`);
    if (res?.status === 'success') {
      const msg = published ? 'Project unpublished' : 'Project published';
      setPublished(!published);
      tailwindToast('success', msg);
    }

    if (!res) {
      tailwindToast('error', res?.message);
    }
  };

  return { published, togglePublish };
}

export default useTogglePublish
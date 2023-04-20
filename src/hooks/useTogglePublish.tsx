import React from 'react'
import { publishProject } from '@/utils';

type Props = {
  id: string;
  initialState: boolean;
}

const useTogglePublish = ({ id, initialState }: Props) => {
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const [published, setPublished] = React.useState<boolean>(initialState);
  const [message, setMessage] = React.useState<string>('');

  const togglePublish = async () => {
    const res = await publishProject(id);
    if (res?.status === 'success') {
      const msg = published ? 'Project unpublished' : 'Project published';
      setPublished(!published);
      setMessage(msg);
      setShowToast(!showToast);
    }
  };

  return { published, togglePublish, showToast, message, setShowToast };
}

export default useTogglePublish
'use client';

import React from 'react'
import { useTogglePublish, useNavigation } from '@/hooks';
import { deleteProject } from '@/utils';

type Props = {
  project: any;
  session: any;
}

export default function DeleteProject({ project, session }: Props) {
  const [showDelete, setShowDelete] = React.useState(false);
  const [deleteMsg, setDeleteMsg] = React.useState('');
  const { router, navigate } = useNavigation();

  const userHasValidSession = Boolean(session);
  const projectBelongsToUser = session?.user?.email === project.author?.email;
  const { published, togglePublish, showToast, message, setShowToast } = useTogglePublish({
    id: project?.id, initialState: project?.published
  });

  const handleProjectDelete = async (id: string) => {
    const response = await deleteProject(id);
    if (response.status === 'success') {
      setDeleteMsg(response.message);
      setShowDelete(!showDelete);
      setTimeout(() => {
        router.back();
      }, 4000);
    }
  }

  const handleProjectEdit = (id: string) => {
    navigate(`/admin/dashboard/projects/edit/${id}`);
  }

  return (
    <div>
      {userHasValidSession && projectBelongsToUser && (
        <div className='btn-container flex gap-5 w-[500px] mx-auto'>
          <button
            onClick={() => togglePublish()}
          >
            {!published && userHasValidSession && projectBelongsToUser ? 'Publish' : 'Unpublish'}
          </button>

          <button
            onClick={() => handleProjectEdit(project.id)}
          >
            Edit
          </button>

          {
            userHasValidSession && projectBelongsToUser && (
              <button onClick={() => handleProjectDelete(project.id)}>Delete</button>
            )}
        </div>
      )}
    </div>
  )
}

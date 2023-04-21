import React from 'react'
import { Layout, Toast, AccessDenied, Status, ControllInput } from '@/components'
import { styled } from '@mui/material'
import { updateProject } from '@/utils'
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import prisma from '@/lib/prisma';
import { useNavigation } from '@/hooks';
import { Project } from '@/types';
import { useForm } from 'react-hook-form';

const FormStyles = styled('form')(({ theme }) => ({
  width: '60%',
  margin: '100px auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  '.buttons': {
    width: '100%',
    display: 'flex',
    gap: theme.spacing(2),
    justifyContent: 'center',
  },

  '& button': {
    width: '30%',
    padding: theme.spacing(2, 2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.white.main,
    border: 'none',
    borderRadius: '5px',
    alignSelf: 'center',
    fontSize: '1.1rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.light,
    },
  },

  '.cancel': {
    backgroundColor: theme.white.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      backgroundColor: theme.white.main,
      color: theme.palette.secondary.light,
    },
  },
}));


const InputBoxStyles = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: { project: JSON.parse(JSON.stringify(project)) },
  };
};

const EditProjectPage: React.FC<Project> = (props) => {
  const [responseOk, setResponseOk] = React.useState<boolean>(false);
  const [showError, setShowError] = React.useState<boolean>(false);
  const [isUpdateCancel, setIsUpdateCancel] = React.useState<boolean>(false);
  const { data: session, status } = useSession();
  const { register, handleSubmit, control, reset, formState: { isSubmitting } } = useForm<Project>({
    mode: 'onBlur',
    defaultValues: props.project,
  })
  const { navigate } = useNavigation()

  const handleCancel = React.useCallback(() => {
    reset();
    setIsUpdateCancel(!isUpdateCancel)
    navigate(`/projects/${props.project.id}`)
  }, [reset, isUpdateCancel, props.project.id, navigate])

  const onSubmit = async (data: Project) => {
    const newStacks = data.stacks.toString().split(',').map((item) => item.trim())
    const updatedData: Project = {
      ...data,
      stacks: newStacks,
    }
    const res = await updateProject(props?.project?.id, updatedData)
    if (res?.status === 200 || res?.status === 'success') {
      setResponseOk(!responseOk)
      navigate(`/projects/${props.project.id}`)
    } else {
      setShowError(!showError)
    }
  }

  if (status === 'loading') {
    return <Status message="Authenticating..." />;
  }

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  const userHasValidSession = Boolean(session);
  const projectBelongsToUser = session?.user?.email === props?.project.author?.email;

  return (
    <Layout>
      {responseOk && <Toast severity='success' message="Project updated succesfully." onClose={() => setResponseOk(!responseOk)} open={responseOk} />
      }

      {isUpdateCancel && <Toast severity='success' message="Update cancelled." onClose={() => setIsUpdateCancel(!isUpdateCancel)} open={isUpdateCancel} />}

      {showError && <Toast severity='error' message="Oops! Something went wrong." onClose={() => setShowError(!showError)} open={showError} />}

      <FormStyles
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBoxStyles>
          <ControllInput
            control={control}
            name='name'
            placeholder='Project Name'
            label='Project Name'
            sx={{ width: '100%' }}
            size='small'
            inputProps={register('name')}
          />
          <ControllInput
            control={control}
            label="Tag"
            name='tag'
            placeholder='e.g frontend, backend, fullstack, etc'
            size='small'
            sx={{ width: '100%' }}
            inputProps={register('tag')}
          />
        </InputBoxStyles>
        <InputBoxStyles>
          <ControllInput
            control={control}
            label="Github URL"
            name='githubUrl'
            placeholder='Github URL'
            size='small'
            sx={{ width: '100%' }}
            inputProps={register('githubUrl')}
          />

          <ControllInput
            control={control}
            label="Live URL"
            name='liveUrl'
            placeholder='Live URL'
            size='small'
            sx={{ width: '100%' }}
            inputProps={register('liveUrl')}
          />

        </InputBoxStyles>

        <InputBoxStyles>
          <ControllInput
            control={control}
            label="cover image URL"
            name='coverImgUrl'
            placeholder='e.g https://images.unsplash.com/photo-1626120000000-0000'
            size='small'
            sx={{ width: '100%' }}
            inputProps={register('coverImgUrl')}
          />

          <ControllInput
            control={control}
            label="Modal image URL"
            name='modalImgUrl'
            placeholder='e.g https://images.unsplash.com/photo-1626120000000-0000'
            size='small'
            sx={{ width: '100%' }}
            inputProps={register('modalImgUrl')}
          />
        </InputBoxStyles>
        <ControllInput
          control={control}
          label="Stacks"
          name='stacks'
          placeholder='e.g React, Node, Express, MongoDB, etc'
          size='small'
          inputProps={register('stacks')}
        />

        <ControllInput
          control={control}
          label="Description"
          placeholder={`${props?.project?.name} is an app for ...`}
          size='small'
          name='description'
          multiline
          rows={8}
        />

        <div className='buttons'>
          <button
            type="submit"
            disabled={!register}
          >
            {userHasValidSession && projectBelongsToUser && isSubmitting ? 'Updating...' : 'Update'}
          </button>

          <button
            type='button'
            className='cancel'
            onClick={() => handleCancel()}
          >Cancel</button>
        </div>
      </FormStyles>
    </Layout>
  );
}

export default EditProjectPage
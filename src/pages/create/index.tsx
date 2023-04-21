import React, { useCallback, useState } from 'react'
import { Layout, Toast } from '@/components'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import { AccessDenied } from '@/components'
import { useRouter } from 'next/router'
import { sendDataToBackend } from '@/utils';
import { useForm } from 'react-hook-form';
import { Project } from '@/types';
import { ControllInput } from '@/components';


const FormContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 3),
  // backgroundColor: theme.white.main,
  fontWeight: 400,
  fontSize: '1.1rem',
  letterSpacing: '0.1rem',
  '& a': {
    color: theme.palette.secondary.light,
    textDecoration: '',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
}));

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

const CreateHomePage: React.FC<Project> = (props) => {
  const { data: session, status } = useSession();
  const [response, setResponse] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const router = useRouter()
  const { register, handleSubmit, control, reset, formState: { isSubmitting } } = useForm<Project>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      description: '',
      githubUrl: '',
      liveUrl: '',
      stacks: [],
      coverImgUrl: '',
      modalImgUrl: '',
      tag: '',
    },
  })

  const handleReset = useCallback(() => {
    reset();
  }, [reset])

  const onSubmit = async (data: Project) => {
    const newData: Project = {
      ...data,
      stacks: data?.stacks?.toString().split(',').map((item: string) => item.trim()),
    }
    const res = await sendDataToBackend(newData)
    if (res?.status === 200) {
      setResponse(!response)
    } else {
      setShowError(!showError)
    }
  }

  React.useEffect(() => {
    if (response) {
      handleReset();
    }
  }, [response, reset, handleReset]);

  const loading = status === 'loading';
  if (router.pathname !== 'undefined' && loading) return null;

  if (!session) { return <AccessDenied /> }

  return (
    <Layout>
      <FormContainer>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          Create Project
        </Typography>

        {response && <Toast
          message='Project created successfully'
          severity='success'
          open={response}
          onClose={() => setResponse(!response)}
        />
        }

        {showError && <Toast message='Oops!, Something went wrong' severity='error' open={showError} onClose={() => setShowError(!showError)} />
        }
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
            placeholder='e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
              {isSubmitting ? 'Submitting...' : 'Create'}
            </button>

            <button
              type='button'
              className='cancel'
              onClick={() => handleReset()}
            >Cancel</button>
          </div>
        </FormStyles>
      </FormContainer>
    </Layout>
  )
}

export default CreateHomePage
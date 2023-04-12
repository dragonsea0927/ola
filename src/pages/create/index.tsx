import React, { useState } from 'react'
import { Layout } from '@/components'
import { styled } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useSession } from 'next-auth/react';
import { AccessDenied } from '@/components'
import { useRouter } from 'next/router'
import { sendDataToBackend } from '@/utils';

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

const InputStyles = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.white.main,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.light,
    },
  },
}));

const InputBoxStyles = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const CreateHomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter()
  const [project, setProject] = useState({
    name: '',
    description: '',
    githubUrl: '',
    liveUrl: '',
    stacks: [],
    coverImgUrl: '',
    modalImgUrl: '',
    tag: '',
  })

  const [stacks, setStacks] = useState<string[]>([])

  const handleStacks = (e) => {
    const { value } = e.target;
    setStacks(value.split(',').map((item: string) => item.trim()))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  }

  const projectData = {
    name: project.name,
    description: project.description,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    stacks: stacks,
    coverImgUrl: project.coverImgUrl,
    modalImgUrl: project.modalImgUrl,
    tag: project.tag,
  }

  const handleReset = () => {
    setProject({
      name: '',
      description: '',
      githubUrl: '',
      liveUrl: '',
      stacks: [],
      coverImgUrl: '',
      modalImgUrl: '',
      tag: '',
    })

    setStacks([])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(projectData, '/api/v1/post')
    handleReset()
  }

  const loading = status === 'loading';
  if (router.pathname !== 'undefined' && loading) return null;

  if (!session) { return <AccessDenied /> }

  return (
    <Layout>
      <FormContainer>
        <FormStyles
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputBoxStyles>
            <InputStyles
              id="outlined-basic"
              label="Project Name"
              name='name'
              variant="outlined"
              placeholder='Project Name'
              color='secondary'
              size='small'
              sx={{ width: '100%' }}
              value={project.name}
              onChange={(e) => handleChange(e)}
            />
            <InputStyles
              id="outlined-basic"
              label="Tag"
              name='tag'
              variant="outlined"
              placeholder='e.g frontend, backend, fullstack, etc'
              color='secondary'
              size='small'
              sx={{ width: '100%' }}
              value={project.tag}
              onChange={(e) => handleChange(e)}
            />
          </InputBoxStyles>
          <InputBoxStyles>
            <InputStyles
              id="outlined-basic"
              label="Github URL"
              name='githubUrl'
              variant="outlined"
              placeholder='Github URL'
              color='secondary'
              size='small'
              sx={{ width: '100%' }}
              value={project.githubUrl}
              onChange={(e) => handleChange(e)}
            />

            <InputStyles
              id="outlined-basic"
              label="Live URL"
              name='liveUrl'
              variant="outlined"
              placeholder='Live URL'
              color='secondary'
              size='small'
              sx={{ width: '100%' }}
              value={project.liveUrl}
              onChange={(e) => handleChange(e)}
            />

          </InputBoxStyles>

          <InputBoxStyles>
            <InputStyles
              id="outlined-basic"
              label="cover image URL"
              name='coverImgUrl'
              variant="outlined"
              placeholder='e.g https://images.unsplash.com/photo-1626120000000-0000'
              color='secondary'
              size='small'
              sx={{ width: '100%' }}
              value={project.coverImgUrl}
              onChange={(e) => handleChange(e)}
            />

            <InputStyles
              id="outlined-basic"
              label="Modal image URL"
              name='modalImgUrl'
              variant="outlined"
              placeholder='e.g https://images.unsplash.com/photo-1626120000000-0000'
              color='secondary'
              size='small'
              sx={{ width: '100%' }}
              value={project.modalImgUrl}
              onChange={(e) => handleChange(e)}
            />
          </InputBoxStyles>
          <InputStyles
            id="outlined-basic"
            label="Stacks"
            variant="outlined"
            name='stacks'
            placeholder='e.g React, Node, Express, MongoDB, etc'
            color='secondary'
            size='small'
            value={stacks}
            onChange={(e) => handleStacks(e)}
          />

          <InputStyles
            id="outlined-basic"
            label="Description"
            variant="outlined"
            placeholder='e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            color='secondary'
            size='small'
            name='description'
            multiline
            rows={8}
            value={project.description}
            onChange={(e) => handleChange(e)}
          />

          <div className='buttons'>
            <button
              type="submit">
              Create
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
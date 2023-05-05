import React from 'react'
import { styled } from '@mui/material/styles';
import { About, currentWork } from '@/types';
import { useForm } from 'react-hook-form';
import { ControllInput } from '@/components';
import { useNavigation } from '@/hooks';
import { updateAboutInfo } from '@/utils'

const FormContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '2rem',
  marging: '5rem auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    height: '100%',
  },

}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '60%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',

  div: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',

  },

  button: {
    width: '40%',
    height: '3rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.white.main,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    fontSize: '1.2rem',
    '&:hover': {
      backgroundColor: theme.white.main,
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    height: '100%',
  },

}));


const EditAboutForm = (props) => {
  const data = props
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  const { navigate } = useNavigation()
  const { register, handleSubmit, control, formState: { isSubmitting } } = useForm<About>({
    mode: 'onBlur',
    defaultValues: data?.about[0]
  })

  const onSubmit = async (data: About) => {
    const updateData = {
      title: data.title,
      intro: data.intro,
      focused: data.focused,
      transitionOne: data.transitionOne,
      transitionTwo: data.transitionTwo,
      hobbies: data.hobbies,
      currentWorks: data.currentWorks
    }
    const res = await updateAboutInfo(props.about[0].id, updateData)
    if (res?.status === 200 || res?.status === 'success') {
      setSuccess(!success)
      navigate(`/about`)
    } else {
      setError(!error)
    }
  }

  const handleCancel = () => {
    props.toggleEdit(false)
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ControllInput
          label="About Title"
          name="title"
          control={control}
          size='small'
          inputProps={register('title')}
          sx={{ width: '100%' }}
        />
        <ControllInput
          label="Intro"
          name="intro"
          control={control}
          size='small'
          inputProps={register('intro')}
          sx={{ width: '100%' }}
          multiline
          rows={4}
        />
        <ControllInput
          label="Focused"
          name="focused"
          control={control}
          size='small'
          inputProps={register('focused')}
          sx={{ width: '100%' }}
          multiline
          rows={2}
        />

        <ControllInput
          label="Transition One"
          name="transitionOne"
          control={control}
          size='small'
          inputProps={register('transitionOne')}
          sx={{ width: '100%' }}
          multiline
          rows={8}
        />

        <ControllInput
          label="Transition Two"
          name="transitionTwo"
          control={control}
          size='small'
          inputProps={register('transitionTwo')}
          sx={{ width: '100%' }}
          multiline
          rows={4}
        />

        <ControllInput
          label="Hobbies"
          name="hobbies"
          control={control}
          size='small'
          inputProps={register('hobbies')}
          sx={{ width: '100%' }}
          multiline
          rows={3}
        />

        {data?.about[0].currentWorks?.map((work: currentWork, index: number) => (
          <div key={index}>
            <h2>{work.name}</h2>
            <ControllInput
              label='name'
              name={`currentWorks.${index}.name`}
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.name`)}
              sx={{ width: '100%' }}

            />

            <ControllInput
              label='role'
              name={`currentWorks.${index}.role`}
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.role`)}
              sx={{ width: '100%' }}
            />

            <ControllInput
              label='description'
              name={`currentWorks.${index}.description`}
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.description`)}
              sx={{ width: '100%' }}
            />

            <ControllInput
              label='imageUrl'
              name={`currentWorks.${index}.imageUrl`}
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.imageUrl`)}
              sx={{ width: '100%' }}
            />

            <ControllInput
              label='date'
              name={`currentWorks.${index}.date`}
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.date`)}
              sx={{ width: '100%' }}
            />
          </div>
        ))}
        <button type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Loading...' : 'Update'}
        </button>

        <button type="button" onClick={() => handleCancel()}>Close Edit</button>
      </StyledForm>
    </FormContainer>
  )
}

export default EditAboutForm
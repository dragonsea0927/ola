import React from 'react'
import { styled } from '@mui/material/styles';
import { About, currentWork } from '@/types';
import { useForm } from 'react-hook-form';
import { ControllInput } from '@/components';

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
  const { register, handleSubmit, control, reset, formState: { isSubmitting } } = useForm<About>({
    mode: 'onBlur',
    defaultValues: data?.about[0]
  })

  const onSubmit = async (data: About) => {
    console.log(data)
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
          rows={2}
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
          rows={3}
        />

        <ControllInput
          label="Transition Two"
          name="transitionTwo"
          control={control}
          size='small'
          inputProps={register('transitionTwo')}
          sx={{ width: '100%' }}
          multiline
          rows={3}
        />

        <ControllInput
          label="Hobbies"
          name="hobbies"
          control={control}
          size='small'
          inputProps={register('hobbies')}
          sx={{ width: '100%' }}
          multiline
          rows={2}
        />

        {data?.about[0].currentWorks?.map((work: currentWork, index: number) => (
          <div key={index}>
            Current Works
            <ControllInput
              label='name'
              name='name'
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.name`)}
              sx={{ width: '100%' }}

            />

            <ControllInput
              label='role'
              name='role'
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.role`)}
              sx={{ width: '100%' }}
            />

            <ControllInput
              label='description'
              name='description'
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.description`)}
              sx={{ width: '100%' }}
            />

            <ControllInput
              label='imageUrl'
              name='imageUrl'
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.imageUrl`)}
              sx={{ width: '100%' }}
            />

            <ControllInput
              label='date'
              name='date'
              control={control}
              size='small'
              inputProps={register(`currentWorks.${index}.date`)}
              sx={{ width: '100%' }}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </StyledForm>
    </FormContainer>
  )
}

export default EditAboutForm
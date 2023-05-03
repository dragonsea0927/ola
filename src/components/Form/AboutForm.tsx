import React from 'react'
import { styled } from '@mui/material/styles';
import { ControllInput } from '@/components';
import { About, currentWork } from '@/types';
import { useForm } from 'react-hook-form';

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

const AboutForm = ({ handleFormSubmit }) => {
  const { register, handleSubmit, control, reset, formState: { isSubmitting } } = useForm<About>({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      intro: '',
      focused: '',
      transitionOne: '',
      transitionTwo: '',
      hobbies: '',
      currentWorks: [],
    }
  })

  const onSubmit = async (data: About) => {
    const newData = {
      ...data,
      currentWorks: data?.currentWorks?.toString().split(',').map((item: any) => {
        return {
          name: item.name,
          role: item.role,
          description: item.description,
          imageurl: item.imageurl,
          date: item.date,
        }
      })
    }
    handleFormSubmit(newData)
  }

  return (
    <div>
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
        <div>
          <h2>Current Work</h2>
          <ControllInput
            label='name'
            name='name'
            control={control}
            size='small'
            inputProps={register('currentWorks')}
            sx={{ width: '100%' }}

          />

          <ControllInput
            label='role'
            name='role'
            control={control}
            size='small'
            inputProps={register('currentWorks')}
            sx={{ width: '100%' }}
          />

          <ControllInput
            label='description'
            name='description'
            control={control}
            size='small'
            inputProps={register('currentWorks')}
            sx={{ width: '100%' }}
          />

          <ControllInput
            label='imageUrl'
            name='imageUrl'
            control={control}
            size='small'
            inputProps={register('currentWorks')}
            sx={{ width: '100%' }}
          />

          <ControllInput
            label='date'
            name='date'
            control={control}
            size='small'
            inputProps={register('currentWorks')}
            sx={{ width: '100%' }}
          />
        </div>
        <button type="submit" >Submit</button>
      </StyledForm>
    </div>
  )
}

export default AboutForm
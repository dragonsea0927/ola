'use client';

import React from 'react'
import { About, currentWork } from '@/types';
import { useForm } from 'react-hook-form';
import { ControllInput, Toast } from '@/components';
import { updateAboutInfo } from '@/utils'

// const StyledForm = styled('form')(({ theme }) => ({
//   width: '60%',
//   height: '100%',
//   margin: '0 auto',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   gap: '2rem',

//   div: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '2rem',

//   },

//   button: {
//     width: '40%',
//     height: '3rem',
//     backgroundColor: theme.palette.secondary.main,
//     color: theme.white.main,
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'all .3s ease-in-out',
//     fontSize: '1.2rem',
//     '&:hover': {
//       backgroundColor: theme.white.main,
//       color: theme.palette.secondary.main,
//       border: `1px solid ${theme.palette.secondary.main}`,
//     }
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   [theme.breakpoints.up('md')]: {
//     height: '100%',
//   },
//   [theme.breakpoints.up('lg')]: {
//     height: '100%',
//   },

// }));

interface AboutPageProps {
  about: About[],
  toggleEdit: (value: boolean) => void,
}

const EditAboutForm: React.FC<AboutPageProps> = (props) => {
  const data = props
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
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
      profileImgUrl: data.profileImgUrl,
      currentWorks: data.currentWorks
    }
    const res = await updateAboutInfo(props?.about[0]?.id, updateData)
    if (res?.status === 200 || res?.status === 'success') {
      setSuccess(!success)
    } else {
      setError(!error)
    }
  }

  const handleCancel = () => {
    props.toggleEdit(false)
  }

  return (
    <main className='w-full h-full p-8 my-20 mx-auto flex justify-center items-center md:block'>

      {/* {success && <Toast severity='success' message='Update Success' open={success} onClose={() => setSuccess(!success)} />}
      {error && <Toast severity='error' message='Update Failed' open={error} onClose={() => setError(!error)} />} */}

      <form onSubmit={handleSubmit(onSubmit)}
        className='flex w-full justify-center items-center md:w-2/3 md:my-0 md:mx-auto md:flex-col md:justify-between md:items-center md:gap-8'
      >
        <ControllInput
          name="title"
          control={control}
          inputProps={register('title')}
          width={'100%'}
        />
        <ControllInput
          name="intro"
          control={control}
          inputProps={register('intro')}
          width={'100%'}
          type='textarea'
        // rows={4}
        />
        <ControllInput
          name="focused"
          control={control}
          inputProps={register('focused')}
          width={'100%'}
          type='textarea'
        // rows={2}
        />

        <ControllInput
          name="transitionOne"
          control={control}
          inputProps={register('transitionOne')}
          width={'100%'}
          type='textarea'
        // rows={8}
        />

        <ControllInput
          name="transitionTwo"
          control={control}
          inputProps={register('transitionTwo')}
          width={'100%'}
          type='textarea'
        // rows={4}
        />

        <ControllInput
          name="hobbies"
          control={control}
          inputProps={register('hobbies')}
          width={'100%'}
          type='textarea'
        />

        <ControllInput
          name="profileImgUrl"
          control={control}
          inputProps={register('profileImgUrl')}
          width={'100%'}
        />

        {data?.about[0].currentWorks?.map((work: currentWork, index: number) => (
          <div key={index} className='w-full flex flex-col items-center gap-8'>
            <h2>{work.name}</h2>
            <ControllInput
              name={`currentWorks.${index}.name`}
              control={control}
              inputProps={register(`currentWorks.${index}.name`)}
              width={'100%'}

            />

            <ControllInput
              name={`currentWorks.${index}.role`}
              control={control}
              inputProps={register(`currentWorks.${index}.role`)}
              width={'100%'}
            />

            <ControllInput
              name={`currentWorks.${index}.description`}
              control={control}
              inputProps={register(`currentWorks.${index}.description`)}
              width={'100%'}
            />

            <ControllInput
              name={`currentWorks.${index}.imageUrl`}
              control={control}
              inputProps={register(`currentWorks.${index}.imageUrl`)}
              width={'100%'}
            />

            <ControllInput
              name={`currentWorks.${index}.date`}
              control={control}
              inputProps={register(`currentWorks.${index}.date`)}
              width={'100%'}
            />
          </div>
        ))}
        <button type="submit"
          disabled={isSubmitting}
          className='w-[40%] h-12 bg-[var(--cta)] rounded-md border-none cursor-pointer text-lg text-[var(--ctaText)] hover:border hover:border-[var(--primary)] hover:bg-[var(--cta)]'
        >
          {isSubmitting ? 'Loading...' : 'Update'}
        </button>

        <button type="button" onClick={() => handleCancel()}>Close Edit</button>
      </form>
    </main>
  )
}

export default EditAboutForm
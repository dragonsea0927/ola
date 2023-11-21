'use client';

import React from 'react'
import { About, currentWork } from '@/types';
import { useForm } from 'react-hook-form';
import { ControllInput } from '@/components';
import { updateAboutInfo } from '@/utils'

interface AboutPageProps {
  about: any,
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
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex w-full justify-center items-center md:w-2/3 md:my-0 md:mx-auto md:flex-col md:justify-between md:items-center md:gap-8'
      >
        <ControllInput
          name="title"
          control={control}
          inputprops={register('title')}
          width={'100%'}
        />
        <ControllInput
          name="intro"
          control={control}
          inputprops={register('intro')}
          width={'100%'}
          type='textarea'
        />
        <ControllInput
          name="focused"
          control={control}
          inputprops={register('focused')}
          width={'100%'}
          type='textarea'
        />

        <ControllInput
          name="transitionOne"
          control={control}
          inputprops={register('transitionOne')}
          width={'100%'}
          type='textarea'
        />

        <ControllInput
          name="transitionTwo"
          control={control}
          inputprops={register('transitionTwo')}
          width={'100%'}
          type='textarea'
        />

        <ControllInput
          name="hobbies"
          control={control}
          inputprops={register('hobbies')}
          width={'100%'}
          type='textarea'
        />

        <ControllInput
          name="profileImgUrl"
          control={control}
          inputprops={register('profileImgUrl')}
          width={'100%'}
        />

        {data?.about[0].currentWorks?.map((work: currentWork, index: number) => (
          <div key={index} className='w-full flex flex-col items-center gap-8'>
            <h2>{work.name}</h2>
            <ControllInput
              name={`currentWorks.${index}.name`}
              control={control}
              inputprops={register(`currentWorks.${index}.name`)}
              width={'100%'}

            />

            <ControllInput
              name={`currentWorks.${index}.role`}
              control={control}
              inputprops={register(`currentWorks.${index}.role`)}
              width={'100%'}
            />

            <ControllInput
              name={`currentWorks.${index}.description`}
              control={control}
              inputprops={register(`currentWorks.${index}.description`)}
              width={'100%'}
            />

            <ControllInput
              name={`currentWorks.${index}.imageUrl`}
              control={control}
              inputprops={register(`currentWorks.${index}.imageUrl`)}
              width={'100%'}
            />

            <ControllInput
              name={`currentWorks.${index}.date`}
              control={control}
              inputprops={register(`currentWorks.${index}.date`)}
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
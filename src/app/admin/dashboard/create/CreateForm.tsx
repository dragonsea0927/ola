
'use client';

import React, { ReactNode, useCallback, useState } from 'react'
import { sendDataToBackend } from '@/utils';
import { useForm } from 'react-hook-form';
import { ControllInput } from '@/components';
import { Project } from '@/types';
import { tailwindToast } from '@/components/Toast/Toast';


const InputBoxStyles = ({ children }: { children: ReactNode }) => (
  <div className='flex gap-3'>
    {children}
  </div>
)

export default function CreateForm() {
  const [responseOk, setResponseOk] = useState<boolean>(false);
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
    tailwindToast('info', 'Resetting form...', '', '')
    reset();
  }, [reset])

  const onSubmit = async (data: Project) => {
    const newData: Project = {
      ...data,
      stacks: data?.stacks?.toString().split(',').map((item: string) => item.trim()),
    }
    const res = await sendDataToBackend(newData, `${process.env.NEXT_PUBLIC_API_URL}`)
    if (res?.status === 201) {
      tailwindToast('success', `${res?.data.message}`, '', '')
      setResponseOk(!responseOk)
    } else {
      tailwindToast('error', `Oops! ${res}`, '', '')
    }
  }

  React.useEffect(() => {
    if (responseOk) {
      handleReset();
    }
  }, [responseOk, reset, handleReset]);

  return (
    <>
      <form
        className='w-full my-[50px] p-3 bg-[var(--bg)] mx-auto flex flex-col gap-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBoxStyles>
          <ControllInput
            control={control}
            name='name'
            placeholder='Project Name'
            width={'100%'}
            inputprops={register('name')}
          />
          <ControllInput
            control={control}
            name='tag'
            placeholder='e.g frontend, backend, fullstack, etc'
            size='small'
            width={'100%'}
            inputprops={register('tag')}
          />
        </InputBoxStyles>
        <InputBoxStyles>
          <ControllInput
            control={control}
            name='githubUrl'
            placeholder='Github URL'
            width={'100%'}
            inputprops={register('githubUrl')}
            required={false}
          />

          <ControllInput
            control={control}
            name='liveUrl'
            placeholder='Live URL'
            width={'100%'}
            inputprops={register('liveUrl')}
            required={false}
          />

        </InputBoxStyles>

        <InputBoxStyles>
          <ControllInput
            control={control}
            name='coverImgUrl'
            placeholder='cover image url'
            size='small'
            width={'100%'}
            inputprops={register('coverImgUrl')}
          />

          <ControllInput
            control={control}
            name='modalImgUrl'
            placeholder='modal image url'
            size='small'
            width={'100%'}
            inputprops={register('modalImgUrl')}
          />
        </InputBoxStyles>
        <ControllInput
          control={control}
          name='stacks'
          placeholder='e.g React, Node, Express, MongoDB, etc'
          size='small'
          inputprops={register('stacks')}
        />

        <ControllInput
          control={control}
          placeholder='e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          size='small'
          name='description'
          type='textarea'
        />

        <div className='w-full flex gap-4 justify-center mt-3'>
          <button
            type="submit"
            disabled={!register}
            className='w-[30%] p-2 bg-[var(--cta)] text-[var(--ctaText)] rounded-md self-center text-lg hover:cursor-pointer'
          >
            {isSubmitting ? 'Submitting...' : 'Create'}
          </button>

          <button
            type='button'
            className='w-[30%] p-2 bg-white text-[var(--primary)] rounded-md self-center text-lg border border-[var(--primary)] hover:cursor-pointer cancel'
            onClick={() => handleReset()}
          >Cancel</button>
        </div>
      </form>
    </>
  )
}

'use client';

import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { ControllInput } from '@/components'
import { Project } from '@/types'
import { updateProject } from '@/utils'
import { redirect } from 'next/navigation'
import EditBottom from '../EditBottom'

const InputBoxStyles = ({ children }: { children: ReactNode }) => (
  <div className='flex gap-3'>
    {children}
  </div>
)

export default function EditForm({ project }: { project: Project }) {

  const { register, handleSubmit, control, reset, formState: { isSubmitting } } = useForm<Project>({
    mode: 'onBlur',
    defaultValues: project,
  })

  const onSubmit = async (data: Project) => {
    const newStacks = data.stacks.toString().split(',').map((item) => item.trim())
    const updatedData: Project = {
      ...data,
      stacks: newStacks,
    }
    const res = await updateProject(project?.id, updatedData)
    if (res?.status === 200 || res?.status === 'success') {
      // setResponseOk(!responseOk)
      redirect(`/admin/dashboard/projects/${project.id}`)
    } else {
      // setShowError(!showError)
    }
  }
  return (
    <>
      <form
        className='w-11/12 my-[100px] mx-auto flex flex-col gap-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBoxStyles>
          <ControllInput
            control={control}
            name='name'
            placeholder='Project Name'
            width={'100%'}
            size='small'
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
            size='small'
            width={'100%'}
            inputprops={register('githubUrl')}
          />

          <ControllInput
            control={control}
            name='liveUrl'
            placeholder='Live URL'
            size='small'
            width={'100%'}
            inputprops={register('liveUrl')}
          />

        </InputBoxStyles>

        <InputBoxStyles>
          <ControllInput
            control={control}
            name='coverImgUrl'
            placeholder='e.g https://images.unsplash.com/photo-1626120000000-0000'
            size='small'
            width={'100%'}
            inputprops={register('coverImgUrl')}
          />

          <ControllInput
            control={control}
            name='modalImgUrl'
            placeholder='e.g https://images.unsplash.com/photo-1626120000000-0000'
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
          placeholder={`${project?.name} is an app for ...`}
          size='small'
          name='description'
          type='textarea'
        />

        <EditBottom project={project} reset={reset} register={register} isSubmitting={isSubmitting} />
      </form>
    </>
  )
}

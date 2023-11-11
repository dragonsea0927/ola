import React from 'react'
import CreateForm from './CreateForm';

const CreateProjectPage = () => {
  return (
    <>
      <main className='w-[85%] p-5 mt-[60px] mx-auto bg-[var(--bg)] rounded-lg'>
        <h1 className='text-center text-[var(--textColor)] text-5xl'>
          Create Project
        </h1>

        {/* {responseOk && <Toast
          message='Project created successfully'
          severity='success'
          open={responseOk}
          onClose={() => setResponseOk(!responseOk)}
        />
        }

        {showError && <Toast message='Oops!, Something went wrong' severity='error' open={showError} onClose={() => setShowError(!showError)} />
        } */}
        <CreateForm />
      </main>
    </>
  )
}

export default CreateProjectPage
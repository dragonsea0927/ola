import React from 'react'
import { Timeline } from '@/components'
import { educationItems as items } from '@/utils'

const Education = () => {
  return (
    <main className='w-full my-12 mx-auto md:w-1/2' data-aos="zoom-in-up">
      <Timeline
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </main>
  )
}

export default Education
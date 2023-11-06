import React from 'react'
import { Timeline } from '@/components'
import { educationItems as items } from '@/utils'

const Education = () => {
  return (
    <main className='w-full md:h-[90%] my-12 md:mx-auto' data-aos="zoom-in-up">
      <Timeline
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </main>
  )
}

export default Education
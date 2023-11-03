import React from 'react'
import { Timeline } from '@/components'
import { workExpItems as items } from '@/utils'

const WorkExperience = () => {
  return (
    <div className='w-full md:h-[90%] my-12 mx-auto' data-aos="zoom-in-up">
      <Timeline
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </div>
  )
}

export default WorkExperience
import React from 'react'
import { Timeline } from '@/components'
import { educationItems as items } from '@/utils'

// const StyledEducationTimeline = styled('div')(({ theme }) => ({
//   margin: '50px auto',
//   width: '50%',
//   h2: {
//     fontSize: '0.85rem',
//   },

//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//   },
// }));


const Education = () => {
  return (
    <main className='w-full my-12 mx-auto md:w-1/2' data-aos="zoom-in-up">
      <Timeline
        items={items}
        mode='VERTICAL'
      />
    </main>
  )
}

export default Education
'use client';

import { Project } from '@/types'
import Image from 'next/image'
import React from 'react'
import { useNavigation } from '@/hooks'

type Props = {
  project: Project
}

// const StyledDraft = styled('div')(({ theme }) => ({
//   cursor: 'pointer',
//   padding: '20px',
//   borderRadius: '5px',
//   boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
//   img: {
//     width: '100%',
//     objectFit: 'fill',
//     borderRadius: '5px',
//   },

//   div: {
//     display: 'flex',
//     ailgnItems: 'center',
//     justifyContent: 'space-between',

//     p: {
//       textTransform: 'capitalize'
//     }
//   },

//   '&:hover': {
//     transform: 'scale(1)',

//     img: {
//       transform: 'scale(1.1)',
//     }
//   }
// }))

function Draft({ project }: Props) {
  const { navigate } = useNavigation()
  const [published, setPublished] = React.useState(project?.published)

  React.useEffect(() => {
    setPublished(project?.published)
  }, [project?.published])


  return (
    <div
      onClick={() => navigate(`/admin/dashboard/projects/${project?.id}`)}
      className='cursor-pointer p-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-125 flex flex-col gap-2'
    >
      <Image
        src={project?.coverImgUrl}
        alt={project?.coverImgUrl}
        width={400}
        height={300}
        className='rounded-md object-fill w-full hover:scale-100'
      />
      <div className='flex items-center justify-between'>
        <h4>{project?.name}</h4>
        <p className='capitalize'>{project?.tag}</p>
      </div>
      <p>Published: <span className='capitalize font-bold'>{`${Boolean(published)}`}</span></p>
    </div>
  )
}

export default Draft
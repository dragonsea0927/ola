// 'use client';

// import { Project } from '@/types'
// import Image from 'next/image'
// import React from 'react'
// import { styled } from '@mui/material/styles'
// import { useNavigation } from '@/hooks'
// import Typography from '@mui/material/Typography'

// type Props = {
//   project: Project
// }

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

// const Draft = ({ project }: Props) => {
//   const { navigate } = useNavigation()
//   const [published, setPublished] = React.useState(project?.published)

//   console.log(published)
//   React.useEffect(() => {
//     setPublished(project?.published)
//   }, [project?.published])


//   return (
//     <StyledDraft
//       onClick={() => navigate(`/projects/${project?.id}`)}
//     >
//       <Image
//         src={project?.coverImgUrl}
//         alt={project?.coverImgUrl}
//         width={400}
//         height={300}
//       />
//       <div>
//         <Typography variant='h4'>{project?.name}</Typography>
//         <p>{project?.tag}</p>
//       </div>
//       <p>Published: <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{`${Boolean(published)}`}</span></p>
//     </StyledDraft>
//   )
// }

// export default Draft
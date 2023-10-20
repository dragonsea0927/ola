// import React from 'react'
// // import { styled } from '@mui/material'
// // import Grid from '@mui/material/Grid'
// import { CustomCard } from '..'
// import { Project } from '@/types'

// // export const Projects = styled(Grid)(({ theme }) => ({
// //   display: 'grid',
// //   gridTemplateColumns: 'repeat(3, 1fr)',

// //   [theme.breakpoints.down('sm')]: {
// //     gridTemplateColumns: 'repeat(1, 1fr)',
// //     padding: '10px',
// //     gap: '30px'
// //   },

// //   [theme.breakpoints.up('md')]: {
// //     gridTemplateColumns: 'repeat(2, 1fr)',
// //     padding: '10px',
// //     gap: '20px',
// //   },

// //   [theme.breakpoints.up('lg')]: {
// //     gridTemplateColumns: 'repeat(3, 1fr)',
// //     padding: '80px',
// //     gap: '30px',
// //   },

// // }))

// const getProjects = async () => {
//   const response = await fetch('/api/v1/projects')

//   if (!response.ok) {
//     throw new Error(response.statusText)
//   }
//   return response.json()
// }

// const AllProjects = async ({ handleOpenModal }: { handleOpenModal: (id: string) => void, projects: any }) => {
//   const projects = await getProjects()
//   // console.log(projects);

//   return (
//     <div>
//       <div>
//         {projects?.map((item: Project) => (
//           <CustomCard
//             key={item.id}
//             image={item.modalImgUrl}
//             overlayText='View Project'
//             name={item.name}
//             role={item.tag}
//             description={item.description}
//             onClick={() => handleOpenModal(item.id)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AllProjects
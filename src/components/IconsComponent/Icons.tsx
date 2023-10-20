// import React from 'react'
// import { IconButton, styled } from '@mui/material'
// import CustomIcon from './CustomIcon'
// import { useNavigation } from '@/hooks'

// interface IconProps {
//   link: {
//     id: number
//     title: string
//     path: string
//     icon?: any
//   }
// }

// const IconButtonStyle = styled(IconButton)(({ theme }) => ({
//   color: theme.palette.secondary.dark,
//   fontSize: '1.1rem',
//   padding: '5px',

//   '&:hover': {
//     border: `1px solid ${theme.white.main}`,
//     color: theme.white.main,
//     backgroundColor: theme.palette.secondary.light,
//     transform: 'scale(1.3) ease-in-out',
//   },

//   [theme.breakpoints.down('sm')]: {
//     color: theme.palette.secondary.main,
//     fontSize: '1.3rem',
//     padding: '2px',
//   },
// }))

// const Icons = ({ link }: IconProps) => {
//   const { icon: IconComponent } = link;
//   const { navigate } = useNavigation()
//   return (
//     <>
//       <IconButtonStyle
//         key={link.id}
//         onClick={() => navigate(link.path)}
//       >
//         <CustomIcon icon={IconComponent} />
//       </IconButtonStyle>
//     </>
//   )
// }

// export default Icons
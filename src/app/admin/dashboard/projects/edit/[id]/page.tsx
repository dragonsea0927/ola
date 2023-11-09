import React from 'react'
import prisma from '@/lib/prisma';
import EditForm from './EditForm';

// const FormStyles = styled('form')(({ theme }) => ({
//   width: '60%',
//   margin: '100px auto',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),

//   '.buttons': {
//     width: '100%',
//     display: 'flex',
//     gap: theme.spacing(2),
//     justifyContent: 'center',
//   },

//   '& button': {
//     width: '30%',
//     padding: theme.spacing(2, 2),
//     backgroundColor: theme.palette.secondary.main,
//     color: theme.white.main,
//     border: 'none',
//     borderRadius: '5px',
//     alignSelf: 'center',
//     fontSize: '1.1rem',
//     '&:hover': {
//       cursor: 'pointer',
//       backgroundColor: theme.palette.secondary.light,
//     },
//   },

//   '.cancel': {
//     backgroundColor: theme.white.main,
//     color: theme.palette.secondary.main,
//     border: `1px solid ${theme.palette.secondary.main}`,
//     '&:hover': {
//       backgroundColor: theme.white.main,
//       color: theme.palette.secondary.light,
//     },
//   },
// }));

type Params = {
  params: {
    id: string
  }
}

const getProject = async (id: string) => {
  const res = await prisma.project.findUnique({
    where: {
      id: id
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  if (!res) {
    throw new Error('Something went wrong')
  }
  return JSON.parse(JSON.stringify(res))
}

const EditProjectPage = async ({ params }: Params) => {
  const { id } = params
  const project = await getProject(id)
  console.log(project)
  return (
    <>
      {/* {responseOk && <Toast severity='success' message="Project updated succesfully." onClose={() => setResponseOk(!responseOk)} open={responseOk} />
      }

      {isUpdateCancel && <Toast severity='success' message="Update cancelled." onClose={() => setIsUpdateCancel(!isUpdateCancel)} open={isUpdateCancel} />}

      {showError && <Toast severity='error' message="Oops! Something went wrong." onClose={() => setShowError(!showError)} open={showError} />} */}

      <EditForm project={project} />

    </>
  );
}

export default EditProjectPage
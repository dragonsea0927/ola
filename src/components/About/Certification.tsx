import React from 'react'
import { styled } from '@mui/material/styles';

const StyledCertificationContainer = styled('div')(({ theme }) => ({
  margin: '50px auto',
  width: '90%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  p: {
    marginBottom: '2rem',
    fontSize: '1rem',
  },

  ul: {
    margin: '0 auto',
    width: '70%',
    gap: '1rem',
    padding: '2rem',
    backgroundColor: theme.palette.background.default,
    borderRadius: '10px',

    li: {
      listStyle: 'none',
      fontSize: '1.2rem',
      padding: '1rem',
      borderRadius: '5px',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',

      a: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
      }
    },
  },
}));

const Certification = () => {
  return (
    <StyledCertificationContainer>
      <h3>Certification & Trainings</h3>
      <p>Here are some of the certifications and trainings I have completed.</p>
      <ul>
        <li>
          Remote Full Stack Web Development Course - <a href="https://www.credential.net/535b9041-ea31-4b61-aa42-960bebc001f6#gs.wdx1dk" target="_blank" rel="noopener noreferrer">Certificate</a>
        </li>
        <li>
          Google Africa Developer Training Program on Google Cloud Platform - <a href="https://adscerts.com/scholar/8FE477CD48800ECF" target="_blank" rel="noopener noreferrer">Certificate</a>
        </li>
      </ul>
    </StyledCertificationContainer>
  )
}

export default Certification
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { socialLinks } from '@/utils';
import { Icons } from '@/components';


const IconContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    gap: '5px',
  },
}));

export default function Copyright() {
  return (
    <IconContainer>
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link href="https://www.linkedin.com/in/ola-ishola/"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none' }}
        >
          Ola Ishola
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
      |{' '}

      {socialLinks.map((link) => (
        <Icons link={link} key={link.id} />
      ))}
    </IconContainer>
  );
}
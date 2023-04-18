import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type Props = {
  severity: 'success' | 'info' | 'warning' | 'error',
  message: string,
  onClose: () => void,
  open: boolean,
}

const Toast = ({ severity, message, onClose, open }: Props) => {
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Toast
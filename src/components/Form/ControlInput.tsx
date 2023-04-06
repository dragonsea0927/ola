import React from 'react'
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.white.main,
  borderRadius: '8px',
  '& .MuiInputBase-input': {
    color: theme.text.primary,
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.white.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.white.main,
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: theme.white.main,
  },
  '& .MuiFormLabel-root': {
    color: theme.text.primary,
  },
}));

interface Props {
  name: string;
  control: any;
  label: string;
  width?: any;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  inputProps?: any;
}

const ControlInput = ({ name, control, label, width, placeholder, ...otherProps }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) =>
        <Input
          id="outlined-basic"
          label={label}
          variant="outlined"
          size='medium'
          placeholder={placeholder}
          sx={{ width: width }}
          onChange={onChange}
          // onBlur={onBlur}
          value={value}
          {...otherProps}
        />}
    />
  )
}

export default ControlInput
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton } from '@/components';
import { useForm, Controller } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


const FormContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [theme.breakpoints.up('md')]: {
    height: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    height: '100%',
  },
}));

const Form = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  small: {
    color: 'red',
  },
  '& > :not(style)': {
    width: '100%',
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.up('md')]: {
      width: '100%',
    },

    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
}));

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

type FormValues = {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters long')
    .max(20, 'Name should be less than 20 characters long')
    .matches(/^[a-zA-Z]+$/, 'Name should be alphabetic'),

  number: yup
    .string()
    .required('Number is required')
    .min(10, 'Number should be at least 10 characters long')
    .max(11, 'Number should be less than 10 characters long')
    .matches(/^[0-9]+$/, 'Number should be numeric'),

  email:
    yup.string()
      .required('Email is required')
      .email('Email is invalid')
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Email is invalid'),

  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Subject should be at least 3 characters long')
    .max(20, 'Subject should be less than 20 characters long')
    .matches(/^[a-zA-Z]/, 'Subject should be alphanumeric'),

  message: yup
    .string()
    .required('Message is required')
    .min(3, 'Message should be at least 3 characters long')
    .max(500, 'Message should be less than 100 characters long')
    .matches(/^[a-zA-Z0-9_]+$/, 'Message should be alphanumeric'),
});

const formValidation = yupResolver(schema);

const ContactForm = () => {
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      number: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: formValidation,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);


  return (
    <FormContainer>
      <Form
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: { xs: '38ch', md: '60ch', } },
        }}
        onClick={handleSubmit(onSubmit)}
      >
        {/* <> */}
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) =>
              <Input
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size='medium'
                placeholder='e.g John Smith'
                sx={{ width: { xs: '38ch', md: '30ch', } }}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                // inputRef={ref}

                inputProps={register('name')}
              />}
          />
          {errors.name?.message ? <small>{`${errors.name.message}`}</small> : null}
        </Box>
        {/* <Input
              id="outlined-basic"
              label='Number'
              variant="outlined"
              size='medium'
              placeholder='e.g +2348012345678'
              sx={{ width: { xs: '38ch', md: '30ch', } }}
              inputProps={register('number')}
            />
          </Box>
          {errors.number?.message ? <small>{`${errors.number.message}`}</small> : null} */}
        {/* {errors.name?.message ? <small>{`${errors.name.message}`}</small> : null} */}
        {/* </> */}
        {/* <Input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size='medium'
          placeholder='youremail@something.com'
          {...register('email', {
            required: true,
          })}
          sx={{ width: { xs: '38ch', md: '60ch', } }}
        />
        {errors.email?.message && <small>{`${errors.email.message}`}</small>}

        <Input
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          size='medium'
          placeholder='e.g I want to work with you'
          {...register('subject', {
            required: true
          })}
        />
        {errors.subject?.message && <small>{`${errors.subject.message}`}</small>}
        <Input
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          variant="outlined"
          placeholder='Say hello!'
          {...register('message', {
            required: true
          })}
        />
        {errors.message?.message && <small>{`${errors.message.message}`}</small>} */}
        <CustomButton
          variant='contained'
          width='50%'
          type='submit'
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Send'}
        </CustomButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
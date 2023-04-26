import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CustomButton } from '@/components';
import { useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import { yupResolver } from "@hookform/resolvers/yup";
import ControlInput from './ControlInput';
import { contactSchema as schema } from '@/utils';
import { FormValues } from '@/types';


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
    // console.log(data);
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
      >
        <Box>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <ControlInput
              control={control}
              name="name"
              label="Name"
              placeholder="e.g John Doe"
              inputProps={register('name')}
              width={{ xs: '38ch', md: '30ch' }}
            />
            <ControlInput
              control={control}
              name="number"
              label="Number"
              placeholder="e.g +2348012345678"
              inputProps={register('number')}
              width={{ xs: '38ch', md: '30ch' }}
            />
          </Box>
          {errors.name?.message ? <small>{`${errors.name.message}`}</small> : null}
          {errors.number?.message ? <small>{`${errors.number.message}`}</small> : null}
        </Box>

        <ControlInput
          control={control}
          name="email"
          label="Email"
          placeholder="e.g youremail@something.com"
          inputProps={register('email')}
        />
        {errors.email?.message && <small>{`${errors.email.message}`}</small>}


        <ControlInput
          control={control}
          name="subject"
          label="Subject"
          placeholder="e.g I want to hire you"
          inputProps={register('subject')}
        />
        {errors.subject?.message && <small>{`${errors.subject.message}`}</small>}

        <ControlInput
          control={control}
          name="message"
          label="Message"
          placeholder='Say hello!'
          inputProps={register('message')}
          multiline
          rows={8}
        />
        {errors.message?.message && <small>{`${errors.message.message}`}</small>}
        <CustomButton
          variant='contained'
          width='50%'
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Send'}
        </CustomButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton } from '@/components';
import { useForm, Resolver } from 'react-hook-form';

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

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: {
      name: values.name ? values.name : {},
      number: values.number ? values.number : {},
      email: values.email ? values.email : {},
      subject: values.subject ? values.subject : {},
      message: values.message ? values.message : {},
    },

    errors: {
      name: !values.name ? { type: 'required', message: 'Name is required' } : {},
      number: !values.number ? { type: 'required', message: 'Number is required' } : {},
      email: !values.email ? { type: 'required', message: 'Email is required' } : {},
      subject: !values.subject ? { type: 'required', message: 'Subject is required' } : {},
      message: !values.message ? { type: 'required', message: 'Message is required' } : {},

    }
  }

};

const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver,
  });



  return (
    <FormContainer>
      <Form
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: { xs: '38ch', md: '60ch', } },
        }}
        onClick={handleSubmit((data) => {
          console.log(data);
          watch();
        })}
      >
        <>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <Input
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size='medium'
              placeholder='e.g John Smith'
              value={watch('name')}
              sx={{ width: { xs: '38ch', md: '30ch', } }}
              {...register('name', {
                required: true,
                validate: {
                  minLength: (value) => value.length > 3 || "The name should be at least 3 characters long",
                  maxLength: (value) => value.length < 20 || "The name should be less than 20 characters long",
                  matchPattern: (value) => /^[a-zA-Z0-9_]+$/.test(value) || "The name should be alphanumeric",
                }
              })}
            />

            <Input
              id="outlined-basic"
              label='Number'
              variant="outlined"
              size='medium'
              placeholder='e.g +2348012345678'
              value={watch('number')}
              sx={{ width: { xs: '38ch', md: '30ch', } }}
              {...register('number', {
                required: true,
                validate: {
                  minLength: (value) => value.length > 11 || "The number should be at least 11 characters long",
                  maxLength: (value) => value.length < 12 || "The number should be less than 15 characters long",
                  matchPattern: (value) => /\+?[1-9][0-9]{7,14}/g.test(value) || "The number should be in the format of +2348012345678",
                },
              })}
            />
          </Box>
          {errors.number?.message && <small>{`${errors.number.message}`}</small>}
          {errors.name?.message && <small>{`${errors.name.message}`}</small>}
        </>
        <Input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size='medium'
          placeholder='youremail@something.com'
          value={watch('email')}
          {...register('email', {
            required: true,
            validate: {
              maxLenght: (v) => v.length <= 50 || "The email should not be more than 50 characters",
              matchPattern: (value) => /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(value) || "The email should be in the format of johndoe@email.com",
            },
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
          value={watch('subject')}
          {...register('subject', {
            required: true,
            validate: {
              minLength: (value) => value.length > 3 || "The subject should be at least 3 characters long",
              maxLength: (value) => value.length < 50 || "The subject should be less than 20 characters long",
            }
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
          value={watch('message')}
          {...register('message', {
            required: true,
            validate: {
              minLength: (value) => value.length > 3 || "The message should be at least 3 characters long",
              maxLength: (value) => value.length < 500 || "The message should be less than 500 characters long",
            }
          })}
        />
        {errors.message?.message && <small>{`${errors.message.message}`}</small>}
        <CustomButton
          variant='contained'
          width='50%'
          type='submit'
        >
          Send
        </CustomButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
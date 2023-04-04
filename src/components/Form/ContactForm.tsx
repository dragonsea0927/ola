import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton } from '@/components';
import { useForm } from 'react-hook-form';

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

const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <FormContainer>
      <Form
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: { xs: '38ch', md: '60ch', } },
        }}
        onClick={handleSubmit((data) => { console.log(data) })}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <div>
            <Input
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size='medium'
              placeholder='e.g John Smith'
              required
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
            {errors.name?.message && <Box sx={{ color: 'red' }}>{errors.name.message}</Box>}
          </div>
          <Box>
            <Input
              id="outlined-basic"
              label='Number'
              variant="outlined"
              size='medium'
              placeholder='e.g 08012345678'
              required
              sx={{ width: { xs: '38ch', md: '30ch', } }}
              {...register('number', {
                required: true,
                validate: {
                  minLength: (value) => value.length > 11 || "The number should be at least 11 characters long",
                  maxLength: (value) => value.length < 15 || "The number should be less than 15 characters long",
                  matchPattern: (value) => /^[a-zA-Z0-9_]+$/.test(value) || "The number should be alphanumeric",
                },
              })}
            />
            {errors.number?.message && <Box sx={{ color: 'red' }}>{errors.number.message}</Box>}
          </Box>
        </Box>
        <Box>
          <Input
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size='medium'
            placeholder='youremail@something.com'
            required
            {...register('email', {
              required: true,
              validate: {
                maxLenght: (v) => v.length <= 50 || "The email should not be more than 50 characters",
                matchPattern: (value) => /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(value) || "The email should be in the format of johndoe@email.com",
              },
            })}
            sx={{ width: { xs: '38ch', md: '60ch', } }}
          />
          {errors.email?.message && <Box sx={{ color: 'red' }}>{errors.email.message}</Box>}
        </Box>

        <Input
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          size='medium'
          placeholder='e.g I want to work with you'
          required
          {...register('subject', {
            required: true,
            validate: {
              minLength: (value) => value.length > 3 || "The subject should be at least 3 characters long",
              maxLength: (value) => value.length < 50 || "The subject should be less than 20 characters long",
              matchPattern: (value) => /^[a-zA-Z0-9_]+$/.test(value) || "The subject should be alphanumeric",
            }
          })}
        />
        <Input
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          variant="outlined"
          placeholder='Say hello!'
          required
          {...register('message', { required: true })}
        />

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
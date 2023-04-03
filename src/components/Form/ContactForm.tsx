import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton } from '../../components';

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
  return (
    <FormContainer>
      <Form
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: { xs: '38ch', md: '60ch', } },
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Input
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size='medium'
            placeholder='e.g John Smith'
            required
            sx={{ width: { xs: '38ch', md: '30ch', } }}
          />

          <Input
            id="outlined-basic"
            label='Number'
            variant="outlined"
            size='medium'
            placeholder='e.g 08012345678'
            required
            sx={{ width: { xs: '38ch', md: '30ch', } }}
          />
        </Box>
        <Input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size='medium'
          placeholder='youremail@something.com'
          required
        />

        <Input
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          size='medium'
          placeholder='e.g I want to work with you'
          required
        />
        <Input
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          variant="outlined"
          placeholder='Say hello!'
          required
        />

        <CustomButton
          variant='contained'
          width='50%'
          onClick={() => { }}
        >
          Send
        </CustomButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
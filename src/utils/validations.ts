import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters long')
    .max(20, 'Name should be less than 20 characters long')
    .matches(/^[a-zA-Z]+$/, 'Name should be alphabetic'),

  number: yup
    .string()
    .required('Phone number is required')
    .min(13, 'Number should be at least 13 characters long')
    .max(15, 'Number should be less than 15 characters long')
    .matches(/^\+?[1-9][0-9]{7,14}$/, 'Number should be numeric'),

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
    .matches(/^[a-zA-Z]+$/, 'Message should be alphabetic'),
});
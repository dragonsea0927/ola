'use client';

import React from 'react';
import { CustomButton } from '@/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import ControlInput from './ControlInput';
import { contactSchema as schema } from '@/utils';
import { FormValues } from '@/types';

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
    <main data-aos="fade-up" className='w-full h-full flex flex-col items-center justify-center md:h-full lg:h-full'>
      <h2 className='hidden lg:block lg:self-start text-3xl font-medium'>
        Contact Me:
      </h2>
      <form
        className='m-1 w-full flex flex-col gap-3'
      >
        <div>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div className='w-full'>
              <ControlInput
                control={control}
                name="name"
                placeholder="e.g John Doe"
                inputprops={register('name')}
                width={'100%'}
                error={errors.name?.message}
              />
              {errors.name?.message && (<small className={errors && 'text-red-700 text-sm'}>{`${errors.name.message}`}</small>)}
            </div>

            <div className='w-full'>
              <ControlInput
                control={control}
                name="number"
                placeholder="e.g +2348012345678"
                inputprops={register('number')}
                width={'100%'}
                error={errors.number?.message}
              />
              {errors.number?.message && (<small className={errors && 'text-red-700 text-sm'}>{`${errors.number.message}`}</small>)}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <ControlInput
            control={control}
            name="email"
            placeholder="e.g youremail@something.com"
            inputprops={register('email')}
            width={'100%'}
            error={errors.email?.message}
          />
          {errors.email?.message && <small className={errors && 'text-red-700 text-sm'}>{`${errors.email.message}`}</small>}
        </div>


        <div className='full'>
          <ControlInput
            control={control}
            name="subject"
            placeholder="e.g I want to hire you"
            inputprops={register('subject')}
            width={'100%'}
            error={errors.subject?.message}
          />
          {errors.subject?.message && <small className={errors && 'text-red-700 text-sm'}>{`${errors.subject.message}`}</small>}
        </div>

        <div className='w-full'>
          <ControlInput
            control={control}
            name="message"
            type='textarea'
            placeholder='Say hello!'
            inputprops={register('message')}
            width={'100%'}
            error={errors.message?.message}
          />
          {errors.message?.message && <small className={errors && 'text-red-700 text-sm'}>{`${errors.message.message}*`}</small>}
        </div>
        <CustomButton
          variant='contained'
          width='25%'
          type='submit'
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          size='large'
        >
          {isSubmitting ? 'Loading' : 'Send'}
        </CustomButton>
      </form>
    </main>
  );
};

export default ContactForm;
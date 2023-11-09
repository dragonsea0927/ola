'use client';

import React from 'react';
import { Controller } from 'react-hook-form';

interface Props {
  name: string;
  control: any;
  width?: any;
  placeholder?: string;
  type?: string;
  inputprops?: any;
  size?: any;
  error?: string;
}

const ControlInput = ({ name, control, width, placeholder, error, type, ...otherProps }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value }, fieldState, formState }) => (
        <>
          {type === 'textarea' ? (
            <textarea
              style={{ width, border: error && '1px solid red' }}
              className='p-3 rounded-md border-none outline-none bg-white focus:bg-[var(--cta)] text-black focus:text-[var(--formText)] border-[var(--textColor)] border-[1px] focus:border-solid focus:border-[var(--textColor)]'
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              {...otherProps}
              rows={8}
              cols={5}
            />
          ) : (
            < input
              id="outlined-basic"
              style={{ width, border: error && '1px solid red' }}
              placeholder={placeholder}
              className={`w-[${width} || 100%] p-3 rounded-md border-none outline-none bg-white focus:bg-[var(--cta)] text-black focus:text-[var(--formText)] border-[var(--textColor)] border-[1px] focus:border-solid focus:border-[var(--textColor)]`}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              {...otherProps}
            />
          )}
        </>
      )}
    />
  );
};

export default ControlInput;
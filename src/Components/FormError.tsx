import React, { FC } from 'react';

interface FormErrorProps {
  text: string;
}

const FormError: FC<FormErrorProps> = ({ text }) => {
  return (
    <div className="text-red-500">{text}</div>
  );
};

export default FormError;

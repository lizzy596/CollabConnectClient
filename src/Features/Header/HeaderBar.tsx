import React from 'react';
import { AuthButton, RegisterButton } from '../Auth/Components';
import { RegistrationForm, LoginForm } from '../Auth';
import Modal from '../../Components/Modal';

const HeaderBar: React.FC = () => {
  return (
    <nav className='bg-black flex justify-between items-center px-20 py-8'>
      <div className='text-white text-3xl mb-4'>CollabConnect</div>
      <div className='flex flex-col items-center'>
        {/* <AuthButton /> */}
        <Modal button={<AuthButton/>} contentComponent={<LoginForm />} />
        <div className='text-white text-sm mt-2'>
          {/* Don't have an account? <a href='/register' className='underline'>Register</a> */}
      <Modal button={<RegisterButton/>}  contentComponent={<RegistrationForm />}/>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBar;



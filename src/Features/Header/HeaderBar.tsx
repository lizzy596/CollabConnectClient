import React from 'react';
import { AuthButton } from '../Auth/Components';


const HeaderBar: React.FC = () => {
  return (
    <nav className='bg-black flex justify-between items-center px-4 py-8'>
      <div className='text-white text-3xl'>CollabConnect</div>
      <AuthButton />
    </nav>
  );
};

export default HeaderBar;

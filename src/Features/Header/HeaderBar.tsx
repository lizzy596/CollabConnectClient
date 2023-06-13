import React from 'react';

const HeaderBar: React.FC = () => {
  return (
    <nav className='bg-black flex justify-between items-center px-4 py-8'>
      <div className='text-white text-3xl'>CollabConnect</div>
      <div className='text-white text-3xl px-6 py-3 border-white border-4 rounded-lg'>
        Login
      </div>
    </nav>
  );
};

export default HeaderBar;

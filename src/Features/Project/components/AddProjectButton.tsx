import React from 'react';

const AddProjectButton: React.FC = () => {
  return (
    <div className='w-20 h-20 rounded-lg border-8 border-purple-600 bg-white-500 flex justify-center items-center'>
      <div className='w-10 h-10  bg-white-500 text-purple-800 flex items-center justify-center text-6xl font-bold'>
        +
      </div>
    </div>
  );
};

export default AddProjectButton;

import React from 'react';

const AddProjectButton: React.FC = () => {
  return (
    <div className='w-20 h-20 rounded-lg border-4 border-gray-300 bg-purple-500 flex justify-center items-center'>
      <div className='w-10 h-10  bg-purple-500 text-gray-300 flex items-center justify-center text-4xl font-bold'>
        +
      </div>
    </div>
  );
};

export default AddProjectButton;

import React, { ReactNode, useState } from 'react';



interface Props {
  button :  React.FunctionComponent;
  buttonText?: string;
  contentComponent:  React.FunctionComponent;
  manageModal?: () => ReactNode
}

const Modal: React.FC<Props> = ({ button, contentComponent  }) => {

  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={handleIsOpen}>
    {button}
    </div>
     
      
      { isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-gray-100 rounded-lg border border-gray-700 w-96'>
              <div className='px-4 py-3'>
              <div className="flex justify-end">
              <button onClick={handleIsOpen} className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold">
      x
    </button>
    </div>
                <div className='px-4 py-3'>{contentComponent}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React from 'react';

const HeaderBar: React.FC = () => {
  return (
    <nav className="bg-black flex justify-between items-center px-4 py-8">
      <div className="text-white text-3xl ">CollabConnect</div>
      <div className="text-white text-3xl border-white-300 border-1">Login</div>
    </nav>
  );
};

export default HeaderBar;

import React from 'react';

const HeaderBar: React.FC = () => {
  return (
    <nav className="bg-black flex justify-between items-center px-4 py-2">
      <div className="text-white">CollabConnect</div>
      <div className="text-white">Login</div>
    </nav>
  );
};

export default HeaderBar;

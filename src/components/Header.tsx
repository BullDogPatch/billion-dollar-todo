import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='h-[100px] flex justify-center items-center'>
      <h1 className='text-3xl text-center text-red-400'>
        Tick of your daily tasks
      </h1>
    </header>
  );
};

export default Header;

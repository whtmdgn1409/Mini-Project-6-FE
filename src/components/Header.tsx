import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import ToggleHeader from './MainPage/ToggleMenu/ToggleHeader';

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setisOpen((isOpen) => !isOpen);
  };
  return (
    <div className='flex relative m-auto h-[100px] w-96 items-center justify-center'>
      <div
        className='inset-x-0 top-0 text-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <span className='text-mw font-semibold'>MW </span>
        <span className='--black-100 font-light'>Loan</span>
      </div>
      <button
        className='absolute right-2 top-[50%] translate-y-[-50%]'
        onClick={() => toggleMenu()}
      >
        <AiOutlineMenu size='28' />
      </button>
      <div
        className={
          isOpen
            ? 'showMenu w-[480px] h-[500px] absolute top-0 opacity-1 right-[-48px] duration-1000 bg-white'
            : 'hideMenu w-[480px] h-[500px] absolute top-0 opacity-0 right-[-528px] duration-1000 bg-white'
        }
      >
        <ToggleHeader toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;

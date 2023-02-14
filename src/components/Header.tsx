import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((isOpen) => !isOpen);
  };
  if (!isOpen) {
    return (
      <div className='flex relative m-auto top-8 h-12 w-96 '>
        <div className='absolute inset-x-0 top-0 text-center text-lg'>
          <span className='text-mw font-semibold'>MW </span>
          <span className='--black-100 font-light'>Bank</span>
        </div>
        <button className='absolute right-2 top-1' onClick={() => toggleMenu()}>
          <AiOutlineMenu size='28' />
        </button>
      </div>
    );
  } else {
    return (
      <div id='gnbMenu' className='w-full h-screen bg-[#000] z-[50]'>
        <div id='menuHeader' className='w-full h-[210px] bg-mw'>
          <div
            className='float-right mt-9 mr-[50px]'
            onClick={() => toggleMenu()}
          >
            {' '}
            <AiOutlineClose size='32' color='#fff' />
          </div>
        </div>
      </div>
    );
  }
};

export default Header;

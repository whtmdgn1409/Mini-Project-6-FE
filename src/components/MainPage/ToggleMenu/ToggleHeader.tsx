import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ToggleBody from './ToggleBody';

interface props {
  toggleMenu(): void;
}
const ToggleHeader = (props: props) => {
  const [logIn, setlogIn] = useState(false);
  const logInCheck = () => {
    if (props) {
    }
  };
  return (
    <div className='relative'>
      <div className='absolute right-[10px] w-full text-right bg-mw'>
        {' '}
        <AiOutlineClose
          size='32'
          color='#fff'
          onClick={() => props.toggleMenu()}
        />
      </div>
      <div></div>
      <ToggleBody />
    </div>
  );
};

export default ToggleHeader;

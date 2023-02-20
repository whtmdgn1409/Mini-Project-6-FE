import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
    <div className='relative w-full h-full z-50 bg-mw'>
      <div className='w-full h-[240px] m-auto'>
        {' '}
        <div className='float-right mt-[35px] mr-[48px] cursor-pointer'>
          {' '}
          <AiOutlineClose
            size='32'
            color='#fff'
            onClick={() => props.toggleMenu()}
          />
        </div>
        <div className='absolute top-[70px] left-[31px] w-[370px] h-[148px] mx-auto '>
          <div className='flex gap-8 justify-center'>
            <div className='w-[70px] h-[70px] rounded-full'>
              <img src='./images/NeedLogin.svg' alt='사용자' />
            </div>
            <div className='mt-4 text-sm'>
              <p className='flex text-[20px]'>
                미왕이 <MdKeyboardArrowRight size='20' />
              </p>
              <p>최근접속 : 2023-02-13 13:50:00</p>
            </div>
          </div>
          <div className='mt-[22px] flex items-center justify-center'>
            <label className='relative block'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-5'>
                {' '}
                <BsSearch size='28' />{' '}
              </span>
              <input
                type='text'
                className='mwInput pl-14 m-auto'
                placeholder='검색어를 입력해주세요'
              />
            </label>
          </div>
        </div>
      </div>
      <ToggleBody />
    </div>
  );
};

export default ToggleHeader;

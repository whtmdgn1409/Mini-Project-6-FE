import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { token } from '../../../api/core/api';
import { deleteCookie } from '../../../utils/cookieFn';
import ToggleBody from './ToggleBody';
import { Link } from 'react-router-dom';

interface props {
  toggleMenu(): void;
}
const ToggleHeader = (props: props) => {
  const [logOut, setlogOut] = useState(String);
  function logOutBtn() {
    deleteCookie('accessToken');
    setlogOut('LOGOUT!');
  }
  console.log(logOut);
  return token ? (
    <div className='relative w-full h-full z-[1000] bg-mw'>
      <div className='w-full h-[240px] m-auto'>
        <div>
          <BiLogOut size='32' color='#fff' onClick={() => logOutBtn()} />
        </div>{' '}
        <div className='float-right mt-[35px] mr-[10px] cursor-pointer'>
          {' '}
          <AiOutlineClose
            size='32'
            color='#fff'
            onClick={() => props.toggleMenu()}
          />
        </div>
        <div className='absolute top-[70px] left-[41px] w-[270px] h-[148px] mx-auto '>
          <div className='flex gap-5'>
            <div className='w-[70px] h-[70px] rounded-full'>
              <img src='./images/Users.png' alt='사용자' />
            </div>
            <div className='mt-4 text-sm'>
              <p className='flex text-[20px]'>
                미왕이 <MdKeyboardArrowRight size='20' />
              </p>
              <p className='text-[10px]'>최근접속 : 2023-02-13 13:50:00</p>
            </div>
          </div>
          <div className='mt-[22px] flex items-center'>
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
  ) : (
    <div className='relative w-full h-full z-[1000] bg-mw'>
      <div className='w-full h-[240px] m-auto'>
        {' '}
        <div className='float-right mt-[35px] mr-[10px] cursor-pointer'>
          {' '}
          <AiOutlineClose
            size='32'
            color='#fff'
            onClick={() => props.toggleMenu()}
          />
        </div>
        <div className='absolute top-[70px] left-[41px] w-[270px] h-[148px] mx-auto '>
          <Link to='/signin'>
            <div className='flex gap-5' onClick={() => props.toggleMenu()}>
              <div className='w-[70px] h-[70px] rounded-full'>
                <img src='./images/NeedLogin.svg' alt='사용자' />
              </div>
              <div className='mt-5 text-[20px] text-center text-white'>
                <p>로그인하기</p>
              </div>
            </div>
          </Link>

          <div className='mt-[22px] flex items-center'>
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

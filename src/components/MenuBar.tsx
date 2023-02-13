import React from 'react';
import {
  IoBookmarksOutline,
  IoCartOutline,
  IoHomeOutline,
  IoPersonCircleOutline,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type Props = {};

const MenuBar = (props: Props) => {
  const navigate = useNavigate();
  const navigateHandler = (link: string) => {
    return navigate(`/${link}`);
  };
  return (
    <div className='w-[350px] h-[80px] bg-white shadow-default rounded-[40px] flex justify-center items-center gap-5 fixed bottom-[30px] !z-50 left-[50%] translate-x-[-50%]'>
      <div
        onClick={() => navigateHandler('')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoHomeOutline className='text-[30px]' />
        <span className='text-[14px]'>홈</span>
      </div>
      <div
        onClick={() => navigateHandler('cart')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoBookmarksOutline className='text-[28px]' />
        <span className='text-[14px]'>관심 상품</span>
      </div>
      <div
        onClick={() => navigateHandler('cart')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoCartOutline className='text-[30px]' />
        <span className='text-[14px]'>장바구니</span>
      </div>
      <div
        onClick={() => navigateHandler('mypage')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoPersonCircleOutline className='text-[30px]' />
        <span className='text-[14px]'>마이 페이지</span>
      </div>
    </div>
  );
};

export default MenuBar;

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
type Props = {};

const Header = (props: Props) => {
  return (
    <div className='flex relative m-auto h-[100px] w-96 items-center justify-center'>
      <div className='inset-x-0 top-0 text-center'>
        <span className='text-mw font-semibold'>MW </span>
        <span className='--black-100 font-light'>Bank</span>
        <button className='absolute right-2 top-[50%] translate-y-[-50%]'>
          <Link to='/'>
            {' '}
            <AiOutlineMenu />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;

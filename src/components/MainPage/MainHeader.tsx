import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
type Props = {};

const MainHeader = (props: Props) => {
  return (
    <div className='flex relative top-8 h-12 w-96'>
      <div className='absolute inset-x-0 top-0 text-center'>
        <span className='text-mw font-semibold'>MW </span>
        <span className='--black-100 font-light'>Bank</span>
      </div>
      <button className='absolute right-2 top-1'>
        <Link to='/'>
          {' '}
          <AiOutlineMenu />
        </Link>
      </button>
    </div>
  );
};

export default MainHeader;

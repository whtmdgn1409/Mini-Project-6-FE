import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
type props = {};

interface listsProps {
  title: string;
  description: string;
}

const lists = {};
const GoodsList = (props: props) => {
  return (
    <div className='relative'>
      <div className='box-border mt-20 font-semibold text-sm p-10'>
        <button>
          <Link to='/' className='flex text-center align-middle'>
            <span>전체 상품</span>
            <MdKeyboardArrowRight size='20' />
          </Link>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default GoodsList;

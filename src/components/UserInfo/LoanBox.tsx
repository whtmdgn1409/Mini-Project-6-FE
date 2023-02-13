import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const LoanBox = () => {
  return (
    <div className='shadow-default rounded-default bg-white w-[360px] h-[100px] flex flex-col px-5 relative justify-center'>
      <span className='text-mw font-bold text-[18px]'>
        중소기업취업청년대출
      </span>
      <span className='text-[18px] font-bold text-mw-dGray'>
        &#8361; 68,000,000
      </span>
      <div>
        <span className='text-[14px] font-bold text-mw-dGray'>대출 만기일</span>{' '}
        <span className='text-mw-dGray text-[14px]'>2024. 02. 14</span>
      </div>
      <MdKeyboardArrowRight className='absolute right-[15px] text-mw text-[24px]' />
    </div>
  );
};

export default LoanBox;

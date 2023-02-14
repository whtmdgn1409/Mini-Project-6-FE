import React from 'react';

type Props = {};

const AccoutHistory = (props: Props) => {
  return (
    <div className='border-b px-[20px]'>
      <span>2023년 2월 14일</span>
      <br />
      <span className='text-mw mb-5'>이자 납입</span>
      <div className='flex flex-col'>
        <div className='flex'>
          <span className='text-[18px]'>거래 원금</span>
          <span>0원</span>
        </div>
      </div>
    </div>
  );
};

export default AccoutHistory;

import React from 'react';
import LikeBox from '../../components/UserInfo/LikeBox';
import LoanBox from '../../components/UserInfo/LoanBox';

type Props = {};

const UserInfoPage = (props: Props) => {
  return (
    <div>
      <h1 className='text-[20px]'>
        <span className='text-mw font-bold'>미왕이</span> 님 안녕하세요!
      </h1>
      <span className='text-[14px]'>이용 중인 대출 3건</span>
      <div className='flex gap-5 flex-col items-center'>
        <LoanBox />
        <LoanBox />
        <button className='mwBtn !h-[30px] !text-[14px]'>더 보기</button>
      </div>
      <br />
      <h2 className='text-[20px] font-bold'>관심 상품</h2>
      <LikeBox />
    </div>
  );
};

export default UserInfoPage;

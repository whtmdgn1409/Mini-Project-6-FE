import React, { useState } from 'react';

type Props = {};

const UserInfoPage = (props: Props) => {
  const [menuChange, setMenuChange] = useState(false);

  const password = () => (
    <div className='flex flex-col gap-5 items-center'>
      <input
        type='text'
        placeholder='기존 비밀번호를 입력해 주세요.'
        className='mwInput'
      />
      <input
        type='text'
        placeholder='새로운 비밀번호를 입력해 주세요.'
        className='mwInput'
      />
      <button className='mwBtn !h-[40px] !w-[300px]'>변경</button>
    </div>
  );
  const userInfo = () => (
    <div className='flex flex-col gap-5 items-center'>
      <select name='' id=''>
        <option value=''>20</option>
        <option value=''>21</option>
        <option value=''>22</option>
        <option value=''>23</option>
      </select>
      <select name='' id=''>
        <option value=''>서울특별시</option>
        <option value=''>부산광역시</option>
        <option value=''>대구광역시</option>
        <option value=''>경상북도</option>
        <option value=''>경상남도</option>
        <option value=''>경기도</option>
        <option value=''>강원도</option>
        <option value=''>전라남도</option>
        <option value=''>전라북도</option>
        <option value=''>제주</option>
      </select>
      <button className='mwBtn !h-[40px] !w-[300px]'>변경</button>
    </div>
  );
  const activeClassName = () => {
    return 'cursor-pointer text-mw font-bold border-solid border-mw border-b-4';
  };
  const defaultClassName = () => {
    return 'cursor-pointer text-mw-gray font-bold';
  };
  return (
    <div>
      <div className='flex gap-16 justify-center mb-12'>
        <h2
          onClick={() => setMenuChange(false)}
          className={!menuChange ? activeClassName() : defaultClassName()}
        >
          비밀번호 변경
        </h2>
        <h2
          onClick={() => setMenuChange(true)}
          className={menuChange ? activeClassName() : defaultClassName()}
        >
          맞춤 정보 변경
        </h2>
      </div>
      {!menuChange ? password() : userInfo()}
    </div>
  );
};

export default UserInfoPage;

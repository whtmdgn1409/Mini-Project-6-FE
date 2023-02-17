import React, { useState } from 'react';
import InfoSelect from '../../components/InfoSelect';

type Props = {};
const jobs = ['회사원', '재직자', '자영업자', '대학생', '군인', '무직'];
const regions = [
  '전국',
  '서울',
  '경기',
  '인천',
  '부산',
  '광주',
  '대구',
  '대전',
  '울산',
  '경북',
  '전북',
  '제주',
];

const age: number[] = [];
for (let i = 20; i < 70; i++) {
  age.push(i);
}

const banks = [
  'KEB하나은행',
  'SC제일은행',
  '국민은행',
  '신한은행',
  '외환은행',
  '우리은행',
  '한국시티은행',
  '기업은행',
  '농협',
  '수협',
  '한국산업은행',
  '부산은행',
  '전북은행',
];

const UserInfoPage = (props: Props) => {
  const [menuChange, setMenuChange] = useState(false);

  const password = () => (
    <div className='w-[300px] m-auto'>
      <form className='flex-col mt-8 text-center'>
        <div>
          <label htmlFor='name'></label>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder='이름'
          />
        </div>
        <div className='mt-8'>
          <label htmlFor='password'></label>
          <input
            type='password'
            className='mwInput pl-6 w-full'
            placeholder='비밀번호'
          />
        </div>
        <button className='mwBtn !w-[300px] font-semibold mt-12'>
          비밀번호 변경
        </button>
      </form>
    </div>
  );
  const userInfo = () => (
    <div className='w-[300px] m-auto'>
      <form className='flex-col text-center'>
        <InfoSelect infos={jobs} />
        <InfoSelect infos={age} />
        <InfoSelect infos={regions} />
        <InfoSelect infos={banks} />
      </form>
      <button className='mwBtn !w-[300px] font-semibold mt-12'>변경</button>
    </div>
  );
  const activeClassName = () => {
    return 'cursor-pointer text-mw font-bold border-solid border-mw border-b-4';
  };
  const defaultClassName = () => {
    return 'cursor-pointer text-mw-gray font-bold hover:text-mw hover:border-b-4 hover:border-mw';
  };
  return (
    <div>
      <div className='flex gap-16 justify-center'>
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

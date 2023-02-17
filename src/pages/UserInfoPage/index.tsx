import React, { useState, useEffect } from 'react';
import InfoSelect from '../../components/InfoSelect';
import age from '../../utils/age';
import jobs from '../../utils/jobs';
import regions from '../../utils/regions';
import banks from '../../utils/banks';
import { getUserDetailInfo, UserDetailInfoType } from '../../api/axios';

type Props = {};

const UserInfoPage = (props: Props) => {
  const [menuChange, setMenuChange] = useState(false);
  const [userInfoData, setUserInfoData] = useState<UserDetailInfoType | null>(
    null,
  );

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserDetailInfo();
      setUserInfoData(userData);
    }
    fetchData();
  }, []);
  console.log(userInfoData);

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
      {userInfoData ? (
        <form className='flex-col text-center'>
          <InfoSelect infos={jobs} defaultValue={userInfoData.job} />
          <InfoSelect infos={age} defaultValue={userInfoData.age} />
          <InfoSelect infos={regions} defaultValue={userInfoData.district} />
          <InfoSelect infos={banks} defaultValue={userInfoData.bank} />
          <InfoSelect infos={banks} defaultValue={userInfoData.bank} />
          <InfoSelect infos={banks} defaultValue={userInfoData.bank} />
        </form>
      ) : (
        ''
      )}
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

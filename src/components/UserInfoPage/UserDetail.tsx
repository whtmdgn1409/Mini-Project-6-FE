import React, { useState, useEffect } from 'react';
import {
  age,
  banks,
  jobs,
  regions,
  crdtGrade,
  income,
} from '../../utils/infoData';
import InfoSelect from '../../components/InfoSelect';
import { getUserDetailInfo, UserDetailInfoType } from '../../api/axios';

type Props = {};

const UserDetail = (props: Props) => {
  const [userDetailInfoData, setUserDetailInfoData] =
    useState<UserDetailInfoType>({
      age: '나이',
      bank: '주거래 은행',
      crdtGrad: '신용점수',
      district: '거주지',
      income: '수입 연봉',
      job: '수입 형태',
    });

  useEffect(() => {
    async function fetchData() {
      const userDetailData = await getUserDetailInfo();
      setUserDetailInfoData(userDetailData);
    }
    fetchData();
  }, []);

  return (
    <div className='w-[300px] m-auto'>
      {userDetailInfoData ? (
        <form className='flex-col text-center'>
          <h3 className='font-semibold mt-8'>수입 형태</h3>
          <InfoSelect infos={jobs} defaultValue={userDetailInfoData.job} />
          <h3 className='font-semibold'>나이</h3>
          <InfoSelect infos={age} defaultValue={userDetailInfoData.age} />
          <h3 className='font-semibold'>거주지</h3>
          <InfoSelect
            infos={regions}
            defaultValue={userDetailInfoData.district}
          />
          <h3 className='font-semibold'>주거래 은행</h3>
          <InfoSelect infos={banks} defaultValue={userDetailInfoData.bank} />
          <h3 className='font-semibold'>신용점수</h3>
          <InfoSelect
            infos={crdtGrade}
            defaultValue={userDetailInfoData.crdtGrad}
          />
          <h3 className='font-semibold'>수입 연봉</h3>
          <InfoSelect infos={income} defaultValue={userDetailInfoData.income} />
          <button
            className='mwBtn !w-[300px] font-semibold mt-12'
            // onSubmit={() => changeUserInfo()}
          >
            변경
          </button>
        </form>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserDetail;

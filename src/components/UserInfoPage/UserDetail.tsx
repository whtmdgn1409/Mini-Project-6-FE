import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  age,
  banks,
  jobs,
  regions,
  crdtGrade,
  income,
} from '../../utils/infoData';
import InfoSelect from '../../components/InfoSelect';
import {
  changeUserDetailInfo,
  getUserDetailInfo,
  UserDetailInfoType,
} from '../../api/axios';
import { FieldValues, useForm } from 'react-hook-form';

type Props = {};

const UserDetail = (props: Props) => {
  const [userDetailInfoData, setUserDetailInfoData] =
    useState<UserDetailInfoType>({
      age: '나이',
      bank: '주거래 은행',
      crdtGrade: '신용점수',
      address: '거주지',
      income: '수입 연봉',
      job: '수입 형태',
    });

  useEffect(() => {
    async function fetchData() {
      const { ok, userDetailInfoData } = await getUserDetailInfo();
      setUserDetailInfoData(userDetailInfoData);
      console.log(ok);
      console.log(userDetailInfoData);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const { job, age, address, bank, crdtGrade, income } = data;
    const { ok, userDetailInfoData } = await changeUserDetailInfo(
      age,
      address,
      job,
      bank,
      crdtGrade,
      income,
    );
    console.log('회원 정보 수정', userDetailInfoData);
    if (ok) navigate('/mypage');
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className='w-[300px] m-auto'>
      {userDetailInfoData ? (
        <form
          className='flex-col text-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='font-semibold mt-8'>수입 형태</h3>
          <InfoSelect
            infos={jobs}
            defaultValue={userDetailInfoData.job}
            {...register('job')}
          />
          <h3 className='font-semibold'>나이</h3>
          <InfoSelect
            infos={age}
            defaultValue={userDetailInfoData.age}
            {...register('age')}
          />
          <h3 className='font-semibold'>거주지</h3>
          <InfoSelect
            infos={regions}
            defaultValue={userDetailInfoData.address}
            {...register('address')}
          />
          <h3 className='font-semibold'>주거래 은행</h3>
          <InfoSelect
            infos={banks}
            defaultValue={userDetailInfoData.bank}
            {...register('bank')}
          />
          <h3 className='font-semibold'>신용점수</h3>
          <InfoSelect
            infos={crdtGrade}
            defaultValue={userDetailInfoData.crdtGrade}
            {...register('crdtGrade')}
          />
          <h3 className='font-semibold'>수입 연봉</h3>
          <InfoSelect
            infos={income}
            defaultValue={userDetailInfoData.income}
            {...register('income')}
          />
          <button className='mwBtn !w-[300px] font-semibold mt-12'>변경</button>
        </form>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserDetail;

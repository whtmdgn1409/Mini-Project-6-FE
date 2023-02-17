import React, { useState, useEffect } from 'react';
import InfoSelect from '../../components/InfoSelect';
import age from '../../utils/age';
import jobs from '../../utils/jobs';
import regions from '../../utils/regions';
import banks from '../../utils/banks';
import { crdtGrade, income } from '../../utils/crdtGrade';
import {
  getUserDetailInfo,
  UserDetailInfoType,
  getUserInfo,
  UserInfoType,
  changeUserInfo,
} from '../../api/axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';

type Props = {};

interface IvalidationForm {
  phone: string;
  password: string;
}

const onSubmit = async (data: FieldValues) => {
  const { phone, password } = data;
  const res = await changeUserInfo(phone, password);
  console.log('회원 정보 변경', res);
};

const UserInfoPage = (props: Props) => {
  const [menuChange, setMenuChange] = useState(false);
  const [userInfoData, setUserInfoData] = useState<UserInfoType | null>(null);
  const [userDetailInfoData, setUserDetailInfoData] =
    useState<UserDetailInfoType>({
      age: '',
      bank: '',
      crdtGrad: '',
      district: '',
      income: '',
      job: '',
    });

  useEffect(() => {
    async function fetchData() {
      const userDetailData = await getUserDetailInfo();
      const userData = await getUserInfo();
      setUserInfoData(userData);
      setUserDetailInfoData(userDetailData);
    }
    fetchData();
  }, []);
  console.log(userDetailInfoData);
  console.log(userInfoData);

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .required('비밀번호를 입력해 주세요.'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/i, '번호는 01012345678 형태로 입력해 주세요.')
      .required('전화 번호를 입력해 주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({ resolver: yupResolver(schema) });

  const password = () => (
    <div className='w-[300px] m-auto'>
      <form
        className='flex-col mt-8 text-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='name'></label>
          <h3 className=''>전화 번호 변경</h3>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder={userInfoData?.phone}
            {...register('phone')}
          />
          {errors.phone && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='password'></label>
          <h3>비밀번호 변경</h3>
          <input
            type='password'
            className='mwInput pl-6 w-full'
            placeholder='새로운 비밀번호'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.password.message}
            </p>
          )}
        </div>
        <button type='submit' className='mwBtn !w-[300px] font-semibold mt-12'>
          회원 정보 변경
        </button>
      </form>
    </div>
  );

  const userInfo = () => (
    <div className='w-[300px] m-auto'>
      {userInfoData ? (
        <form className='flex-col text-center'>
          <InfoSelect infos={jobs} defaultValue={userDetailInfoData.job} />
          <InfoSelect infos={age} defaultValue={userDetailInfoData.age} />
          <InfoSelect
            infos={regions}
            defaultValue={userDetailInfoData.district}
          />
          <InfoSelect infos={banks} defaultValue={userDetailInfoData.bank} />
          <InfoSelect
            infos={crdtGrade}
            defaultValue={userDetailInfoData.crdtGrad}
          />
          <InfoSelect infos={income} defaultValue={userDetailInfoData.income} />
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

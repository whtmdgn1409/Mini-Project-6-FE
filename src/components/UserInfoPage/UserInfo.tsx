import React, { useState, useEffect, useMemo } from 'react';
import {
  getUserInfo,
  UserInfoType,
  changeUserInfo,
  checkUser,
} from '../../api/axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Props = {};

interface IvalidationForm {
  phone: string;
  password: string;
  newPassword: string;
}

const UserInfo = (props: Props) => {
  const [userInfoData, setUserInfoData] = useState<UserInfoType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserInfo();
      setUserInfoData(userData);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    const { phone, newPassword, password } = data;
    const res = await checkUser(password).then(() =>
      changeUserInfo(phone, newPassword),
    );
    if (res === 'success') {
      navigate('/mypage');
    }
  };

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .matches(
        /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
        '숫자 혹은 문자로만 구성되어야 합니다',
      )
      .required('비밀번호를 입력해 주세요.'),
    newPassword: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .matches(
        /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
        '숫자 혹은 문자로만 구성되어야 합니다',
      )
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

  return (
    <div className='w-[300px] m-auto'>
      <form
        className='flex-col mt-8 text-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='name'></label>
          <h3 className='font-semibold mb-2'>전화 번호 변경</h3>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder={userInfoData?.phone}
            {...register('phone')}
          />
          {errors.phone && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='password'></label>
          <h3 className='font-semibold mb-2'>비밀번호 변경</h3>
          <input
            type='password'
            className='mwInput pl-6 w-full mb-3'
            placeholder='기존 비밀번호'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.password.message}
            </p>
          )}
          <input
            type='password'
            className='mwInput pl-6 w-full'
            placeholder='새로운 비밀번호'
            {...register('newPassword')}
          />
          {errors.newPassword && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <button type='submit' className='mwBtn !w-[300px] font-semibold mt-12'>
          회원 정보 변경
        </button>
      </form>
    </div>
  );
};

export default React.memo(UserInfo);
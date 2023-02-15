import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUp } from '../../api/axios';

type Props = {};

interface IvalidationForm {
  name: string;
  password: string;
  email: string;
  phone: string;
}
const onSubmit = async (data: FieldValues) => {
  const { name, email, password, phone } = data;
  const test = await signUp(name, email, password, phone);
  console.log('test', test);
};

const SignUpPage = (props: Props) => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(5, '최대 길이는 5글자 입니다')
      .required('이름을 입력해주세요'),
    password: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해주세요')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해주세요')
      .required('비밀번호를 입력해주세요'),
    email: yup
      .string()
      .email('이메일 형식에 맞추어 입력해주세요')
      .required('이메일 형식에 맞추어 입력해주세요'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/i, '번호는 01012345678형태로 입력해주세요')
      .required('휴대폰 번호를 입력해주세요'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({
    resolver: yupResolver(schema),
  });
  const check = (data: string) => {
    console.log(data);
  };
  return (
    <section className='w-[300px] m-auto'>
      <h1 className='text-4xl font-bold text-center'>반가워요</h1>
      <p className='text-center mt-4 mw-lGray'>
        가입에 꼭 필요한 정보를 알려주세요
        <br />
        금방 끝나요!😉
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex-col mt-16 text-center'
      >
        <div>
          <label htmlFor='name'></label>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder='이름'
            {...register('name')}
          />
          {errors.name && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='password'></label>
          <input
            type='password'
            className='mwInput pl-6 w-full'
            placeholder='비밀번호'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='text'></label>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder='이메일'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='phone'></label>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder='모바일'
            {...register('phone')}
          />
          {errors.phone && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.phone.message}
            </p>
          )}
        </div>
        <button type='submit' className='mwBtn !w-[300px] font-semibold mt-12'>
          회원가입 하기
        </button>
      </form>
      <p className='mt-12 text-center'>
        이미 회원이신가요?
        <button
          onClick={() => {
            navigate('/signup');
          }}
          className='font-bold text-mw'
        >
          &nbsp;로그인 하기
        </button>
      </p>
    </section>
  );
};

export default SignUpPage;

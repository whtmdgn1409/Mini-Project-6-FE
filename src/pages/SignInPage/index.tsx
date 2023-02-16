import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Props = {};

interface IvalidationForm {
  email: string;
  password: string;
}

const SignInPage = (props: Props) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('이메일 형식에 맞추어 입력해주세요')
      .required('이메일 형식에 맞추어 입력해주세요'),
    password: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해주세요')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해주세요')
      .required('비밀번호를 입력해주세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  return (
    <section>
      <h1 className='text-6xl font-bold text-center'>안녕하세요</h1>
      <form className='flex-col mt-24 text-center'>
        <div>
          <label htmlFor='email'></label>
          <input
            type='text'
            className='mwInput pl-6'
            placeholder='이메일을 입력해주세요'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mt-12'>
          <label htmlFor=''></label>
          <input
            type='password'
            className='mwInput pl-6'
            placeholder='비밀번호를 입력해주세요'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-sm text-alert font-semibold pt-3'>
              {errors.password.message}
            </p>
          )}
        </div>
        <button className='mwBtn !w-[300px] font-semibold mt-12'>로그인</button>
      </form>
      <p className='mt-12 text-center'>
        회원이 아니세요?&nbsp;
        <button
          onClick={() => {
            navigate('/signin');
          }}
          className='font-bold text-mw'
        >
          회원가입 하기
        </button>
      </p>
    </section>
  );
};

export default SignInPage;

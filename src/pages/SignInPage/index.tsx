import { useNavigate } from 'react-router-dom';

type Props = {};

const SignInPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <section className='w-[300px] m-auto'>
      <h1 className='text-4xl font-bold text-center'>반가워요</h1>
      <p className='text-center mt-4 mw-lGray'>
        가입에 꼭 필요한 정보를 알려주세요
        <br />
        금방 끝나요!😉
      </p>
      <form className='flex-col mt-16 text-center'>
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
        <div className='mt-8'>
          <label htmlFor='text'></label>
          <input
            type='email'
            className='mwInput pl-6 w-full'
            placeholder='이메일'
          />
        </div>
        <div className='mt-8'>
          <label htmlFor='mobile'></label>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder='모바일'
          />
        </div>
        <button
          onClick={() => {
            navigate('/signin/optinfo');
          }}
          className='mwBtn !w-[300px] font-semibold mt-12'
        >
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

export default SignInPage;

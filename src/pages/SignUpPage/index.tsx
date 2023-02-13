type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <section>
      <h1 className='text-6xl font-bold text-center'>안녕하세요</h1>
      <form className='flex-col mt-32 text-center'>
        <div>
          <label htmlFor='email'></label>
          <input
            type='text'
            className='mwInput pl-6'
            placeholder='이메일을 입력해주세요'
          />
        </div>
        <div className='mt-12'>
          <label htmlFor=''></label>
          <input
            type='password'
            className='mwInput pl-6'
            placeholder='비밀번호를 입력해주세요'
          />
        </div>
        <button className='mwBtn !w-[300px] font-semibold mt-12'>로그인</button>
      </form>
      <p className='mt-12 text-center'>
        회원이 아니세요?
        <button className='font-bold text-mw'> 회원가입 하기</button>
      </p>
    </section>
  );
};

export default SignUpPage;

import React from 'react';

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <section>
      <h1 className='text-4xl font-bold text-center'>회원가입</h1>
      <p className='text-center mt-4 mw-lGray'>
        가입을 위한 정보를 입력해 주세요
      </p>
      <form className='flex-col mt-16 text-center'>
        <div>
          <label htmlFor='name'></label>
          <input type='text' className='mwInput pl-6' placeholder='이름' />
        </div>
        <div className='mt-12'>
          <label htmlFor='password'></label>
          <input
            type='password'
            className='mwInput pl-6'
            placeholder='비밀번호'
          />
        </div>
        <div className='mt-12'>
          <label htmlFor='text'></label>
          <input type='email' className='mwInput pl-6' placeholder='이메일' />
        </div>
        <div className='mt-12'>
          <label htmlFor='mobile'></label>
          <input type='text' className='mwInput pl-6' placeholder='모바일' />
        </div>
        <button className='mwBtn !w-[300px] font-semibold mt-12'>
          회원가입 하기
        </button>
      </form>
      <p className='mt-12 text-center'>
        이미 회원이신가요?
        <button className='font-bold text-mw'>&nbsp;로그인 하기</button>
      </p>
    </section>
  );
};

export default SignInPage;

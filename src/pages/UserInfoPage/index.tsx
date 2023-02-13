import React from 'react';

type Props = {};

const UserInfoPage = (props: Props) => {
  return (
    <div>
      <div>
        <h2>비밀번호 변경</h2>
        <h2>맞춤 정보 변경</h2>
      </div>
      <div>
        <input type='text' placeholder='기존 비밀번호를 입력해 주세요.' />
        <input type='text' placeholder='새로운 비밀번호를 입력해 주세요.' />
      </div>
    </div>
  );
};

export default UserInfoPage;

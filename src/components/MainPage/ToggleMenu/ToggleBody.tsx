import React from 'react';

type props = {};

const typeslist = [
  ['기관', ['공공/정부기관', '여신금융회사', '은행', '일반기관', '기타']],
  [
    '지역',
    [
      '강원',
      '경기',
      '경남',
      '경북',
      '광주',
      '대구',
      '대전',
      '부산',
      '서울',
      '세종',
      '인천',
      '전국',
      '전남',
      '전북',
      '제주',
      '충남',
      '충북',
    ],
  ],
  ['용도', ['생계', '운영', '주거', '창업', '학자금', '기타']],
  ['타겟층', ['근로자', '사업가', '소상공인', '사회적경제기업', '기타']],
];

const ToggleBody = (props: props) => {
  return (
    <div className='absolute top-[240px] w-full bg-mw-gray text-black'>
      <div className='flex'>
        {typeslist.map((types, index) => (
          <div>{types}</div>
        ))}
      </div>
    </div>
  );
};

export default ToggleBody;

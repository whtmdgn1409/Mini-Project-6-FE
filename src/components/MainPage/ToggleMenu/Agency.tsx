import React from 'react';
type props = {};
const agencyList = [
  '공공/정부기관',
  '여신금융회사',
  '은행',
  '일반기관',
  '기타',
];
const Agency = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {agencyList.map((list) => {
        return <div className=''>{list}</div>;
      })}
    </div>
  );
};

export default Agency;

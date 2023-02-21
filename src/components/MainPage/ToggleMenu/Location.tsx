import React from 'react';
type props = {};
const locationList = [
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
];
const Location = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {locationList.map((list) => {
        return <div className=''>{list}</div>;
      })}
    </div>
  );
};

export default Location;

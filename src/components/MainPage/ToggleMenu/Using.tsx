import React from 'react';
type props = {};
const usingList = ['생계', '운영', '주거', '창업', '학자금', '기타'];
const Using = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {usingList.map((list) => {
        return <div className=''>{list}</div>;
      })}
    </div>
  );
};

export default Using;

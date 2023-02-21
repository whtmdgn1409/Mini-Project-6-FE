import React from 'react';
type props = {};
const targetList = ['근로자', '사업가', '소상공인', '사회적경제기업', '기타'];
const Target = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {targetList.map((list) => {
        return <div className=''>{list}</div>;
      })}
    </div>
  );
};

export default Target;

import React from 'react';
import { targetList } from '../../../utils/infoData';
type props = {};
const Target = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {targetList.map((list) => {
        return (
          <div key={list} className=''>
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Target;

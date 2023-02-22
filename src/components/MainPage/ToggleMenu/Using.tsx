import React from 'react';
import { usingList } from '../../../utils/infoData';
type props = {};
const Using = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {usingList.map((list) => {
        return (
          <div key={list} className=''>
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Using;

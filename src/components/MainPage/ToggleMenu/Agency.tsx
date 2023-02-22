import React from 'react';
import { agencyList } from '../../../utils/infoData';
type props = {};

const Agency = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {agencyList.map((list) => {
        return (
          <div key={list} className=''>
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Agency;

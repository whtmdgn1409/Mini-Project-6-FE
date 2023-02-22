import React from 'react';
import { locationList } from '../../../utils/infoData';
type props = {};

const Location = (props: props) => {
  return (
    <div className='flex flex-col w-[280px] gap-3'>
      {locationList.map((list) => {
        return (
          <div key={list} className=''>
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Location;

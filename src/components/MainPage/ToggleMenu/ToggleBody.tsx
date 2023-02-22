import React, { useState } from 'react';
import Agency from './Agency';
import Location from './Location';
import Using from './Using';
import Target from './Target';

type props = {};

const lists = ['기관', '지역', '용도', '직업'];

const ToggleBody = (props: props) => {
  const [activeMenu, setactiveMenu] = useState(0);
  return (
    <div className='absolute top-[240px] w-full bg-white text-black'>
      <div className='flex'>
        <ul className='my-2 w-[100px] h-[200px] flex flex-col justify-center items-center text-center gap-2'>
          {lists.map((list, i) => {
            return (
              <li
                key={i}
                className={
                  i === activeMenu
                    ? 'w-[90px] h-[63px] ml-2 text-white bg-mw rounded-[15px] flex justify-center items-center '
                    : 'w-[90px] h-[63px] ml-2 text-black flex justify-center items-center'
                }
                onClick={() => setactiveMenu(i)}
              >
                {list}
              </li>
            );
          })}
        </ul>
        <div className='ml-3 mt-3 flex flex-col'>
          {[<Agency />, <Location />, <Using />, <Target />][activeMenu]}
        </div>
      </div>
    </div>
  );
};

export default ToggleBody;

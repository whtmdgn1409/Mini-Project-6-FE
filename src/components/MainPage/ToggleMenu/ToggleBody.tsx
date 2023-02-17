import React from 'react';

type props = {};

const ToggleBody = (props: props) => {
  return (
    <div className='w-full bg-white text-black'>
      <div>
        <ul className=''>
          <li>
            직업별
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </li>
          <li>
            지역별
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </li>
          <li>
            나이대별
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleBody;

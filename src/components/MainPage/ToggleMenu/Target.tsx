import React from 'react';
import { targetList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';
type props = {
  toggleMenu: () => void;
};
const Target = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-[230px] gap-3'>
      {targetList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointe'
            onClick={() => {
              toggleMenu();
              navigate(`/category/target&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Target;

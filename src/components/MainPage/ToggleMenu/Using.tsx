import React from 'react';
import { usingList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';
type props = {
  toggleMenu: () => void;
};
const Using = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-[230px] gap-3'>
      {usingList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointer'
            onClick={() => {
              toggleMenu();
              navigate(`/category/usge&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Using;

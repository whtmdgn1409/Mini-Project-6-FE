import React from 'react';
import { agencyList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';
type props = {
  toggleMenu: () => void;
};

const Agency = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-[230px] gap-3'>
      {agencyList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointer'
            onClick={() => {
              toggleMenu();
              navigate(`/category/office&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Agency;

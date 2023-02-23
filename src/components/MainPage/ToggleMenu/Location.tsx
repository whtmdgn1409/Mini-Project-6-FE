import React from 'react';
import { locationList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';
type props = {
  toggleMenu: () => void;
};

const Location = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-[230px] gap-3'>
      {locationList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointer'
            onClick={() => {
              toggleMenu();
              navigate(`/category/area&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Location;

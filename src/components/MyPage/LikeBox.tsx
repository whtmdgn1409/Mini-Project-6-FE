import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FavorType, deleteFavor } from '../../api/axios';

type Props = {
  item: FavorType;
};

const LikeBox = ({ item }: Props) => {
  const navigate = useNavigate();

  return (
    <div className='m-auto w-[180px] h-[250px] bg-mw flex flex-col items-center justify-center rounded-default shadow-default text-white p-5 gap-2'>
      <span className='font-bold text-center truncate w-full'>
        {item.loanName}
      </span>
      <span className='font-bold text-center'>최대 1억 원</span>
      <div>
        <div className='flex items-center gap-2'>
          <span className='font-bold'>금리</span>
          <span className='text-[12px]'>{item.ratePercent}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-bold'>대상</span>
          <span className='text-[12px]'>{item.loanTarget}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-bold'>취급 기관</span>
          <span className='text-[12px]'>근로 복지 공단</span>
        </div>
      </div>
      <button
        className='mwBtn-white !w-[100px] !h-[30px] !text-[12px]'
        onClick={() => navigate(`/product/${item.snq}`)}
      >
        자세히 보기
      </button>
      <button
        className='mwBtn-white !w-[100px] !h-[30px] !text-[12px]'
        onClick={() => {
          deleteFavor(item.snq);
          location.reload();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default LikeBox;

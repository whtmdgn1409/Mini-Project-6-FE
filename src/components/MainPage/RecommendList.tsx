import React from 'react';
import Slick from '../../slider/slick';

interface itemsProps {
  item: string;
  name: string;
}

const RecommendList = () => {
  const items: itemsProps[] = [
    {
      item: 'http://placehold.it/1200x400',
      name: '이미지01',
    },
    {
      item: 'http://placehold.it/1200x400/ff0000',
      name: '이미지02',
    },
    {
      item: 'http://placehold.it/1200x400/00ffff',
      name: '이미지03',
    },
    {
      item: 'http://placehold.it/1200x400/00ffff',
      name: '이미지04',
    },
    {
      item: 'http://placehold.it/1200x400/00ffff',
      name: '이미지05',
    },
  ];
  return (
    <div className='relative top-10 max-w-ms'>
      <p className='font-semibold text-2xl p-10 ml-3 box-border'>
        <span className='text-mw'>미왕이</span> 님을 위한 추천상품이에요.
      </p>
      {/* 추천 상품 리스트 보여주기 */}
      <div className='SlickContainer w-80 h-36 ml-15 m-auto box-border'>
        <Slick>
          {items.map((item, index) => (
            <div key={index} className='shadow-default'>
              <img className='w-80 h-28' src={item.item} alt={item.name} />
            </div>
          ))}
        </Slick>
      </div>
    </div>
  );
};

export default RecommendList;

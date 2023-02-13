import React from 'react';

const RecommendList = () => {
  return (
    <div className='relative top-10'>
      <p className='font-semibold text-sm p-1.5'>
        <span className='text-mw'>미왕이</span> 님을 위한 추천상품이에요.
      </p>
      {/* 추천 상품 리스트 보여주기 */}
      <div className='SlickContainer'></div>
    </div>
  );
};

export default RecommendList;

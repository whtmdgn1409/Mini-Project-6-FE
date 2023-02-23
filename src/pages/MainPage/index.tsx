import React from 'react';
import GoodsList from '../../components/MainPage/GoodsList';
import RecommendList from '../../components/MainPage/RecommendList';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className='mx-[30px]'>
      <RecommendList />
      <GoodsList />
    </div>
  );
};

export default MainPage;

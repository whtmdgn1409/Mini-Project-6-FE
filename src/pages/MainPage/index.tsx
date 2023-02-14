import React from 'react';
import GoodsList from '../../components/MainPage/GoodsList';
import RecommendList from '../../components/MainPage/RecommendList';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <RecommendList />
      <GoodsList />
    </div>
  );
};

export default MainPage;

import React from 'react';
import GoodsList from '../../components/MainPage/GoodsList';
import MainHeader from '../../components/MainPage/MainHeader';
import RecommendList from '../../components/MainPage/RecommendList';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <MainHeader />
      <RecommendList />
      <GoodsList />
    </div>
  );
};

export default MainPage;

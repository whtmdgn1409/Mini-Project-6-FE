import React from 'react';
import MainHeader from '../../components/MainPage/MainHeader';
import RecommendList from '../../components/MainPage/RecommendList';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <MainHeader />
      <RecommendList />
    </div>
  );
};

export default MainPage;

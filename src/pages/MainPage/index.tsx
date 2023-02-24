import React from 'react';
import GoodsList from '../../components/MainPage/GoodsList';
import RecommendList from '../../components/MainPage/RecommendList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

const MainPage = (props: Props) => {
  const notify = (state: string) => toast.success(`${state}에 추가되었습니다.`);
  return (
    <div className='mx-[30px]'>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <RecommendList />
      <GoodsList notify={notify} />
    </div>
  );
};

export default MainPage;

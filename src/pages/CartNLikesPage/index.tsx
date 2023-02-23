import React from 'react';
import logo from '../../assets/008.png';
import vector from '../../assets/Vector.svg';
import CartList from '../../components/CartNLikePage/CarList';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { autoCheck } from '../../features/authSlice';
type Props = {};

const CartNLikesPage = (props: Props) => {
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  return isLogin ? (
    <div className='relative'>
      <img
        src={logo}
        alt='로고 이미지'
        className='opacity-[0.2] absolute top-0 right-0 w-[227px] h-[191px]'
      />
      <div className='mt-5 text-center text-[30px] font-bold'>
        <span className='text-mw'>미왕이</span>님 상품몰 장바구니
      </div>
      <CartList />
    </div>
  ) : (
    <Navigate to='/signin'></Navigate>
  );
};

export default CartNLikesPage;

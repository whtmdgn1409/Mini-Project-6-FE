import React from 'react';
import logo from '../../assets/008.png';
import vector from '../../assets/Vector.svg';
import CartList from '../../components/CartNLikePage/CarList';

type Props = {};

const CartNLikesPage = (props: Props) => {

  return (
    <div className='relative'>
      <img
        src={logo}
        alt='로고 이미지'
        className='opacity-[0.2] absolute top-0 right-0 w-[227px] h-[191px]'
      />
      <div className='mt-5 text-center text-[30px] font-bold'>
        <span className='text-mw'>미왕이</span>님 상품몰 장바구니
      </div>
      <CartList/>
      <div className='px-[24px] mb-48'>
        <div className='rounded-[16px] border-[1px] border--black-70  flex justify-between items-center w-full h-[120px] px-6 my-6'>
          <div className='text--border--black-40 text-[20px]'>
            최근에 봤던 관심상품이 궁금하신가요?
          </div>
          <div>
            <img className='h-4' src={vector} alt='화살표' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartNLikesPage;

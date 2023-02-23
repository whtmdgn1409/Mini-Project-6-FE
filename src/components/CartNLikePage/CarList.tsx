import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { deleteCartItems, getCartItems } from '../../features/cartSlice';

export default function CartList() {
  const [isLoading, setIsLoading] = useState(true);
  const cartList = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  console.log(cartList);

  useEffect(() => {
    const initCartList = async () => {
      // @ts-ignore
      await dispatch(getCartItems());
      setIsLoading(false);
    };
    initCartList();
  }, []);

  const deleteCart = (snq: number) => {
    // @ts-ignore
    dispatch(deleteCartItems(snq));
  };

  if (isLoading) {
    return (
      <div className='w-full h-[400px] flex justify-center items-center'>
        <BeatLoader color='#36d7b7' />
      </div>
    );
  } else {
    return (
      <div>
        <div className='text--black-100 font-bold text-5 my-6 text-center'>
          장바구니 등록한 <span className='text-mw'>{cartList.length}개</span>의
          상품을 확인해 보세요
        </div>
        {cartList.length === 0 ? (
          <div className='p-5 text-center'>
            장바구니에 등록한 상품이 없습니다.
          </div>
        ) : (
          cartList.map((cart) => {
            return (
              <div className='border-b-[1px] border--black-80'>
                <CartItem onClick={() => deleteCart(cart.snq)} info={cart} />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

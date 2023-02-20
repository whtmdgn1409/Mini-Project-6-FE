import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import getStoredState from 'redux-persist/es/integration/getStoredStateMigrateV4';
import { CartType, deleteCart, getCartList } from '../../api/axios';
import Loading from '../../pages/LoadingPage';
import CartItem from './CartItem';

// const dummyCart:CartType[] = [
//   {
//     snq: 674,
//     loanName: "하나원큐신용대출",
//     loanDescription: "1. 현 직장 6개월이상 국민건강보험 직장인 가입 손님으로 스크래핑에 의해 건강보험료 6개월이상 정상 납입 손님2. CB사 소득에 의해 대출한도가 산정되는 손님",
//     loanTarget: ["근로자"],
//     baseRate: "-",
//     rate: "-",
//   }
// ]

export default function CartList(){
  const [isLoading, setIsLoading] = useState(true);
  const [carts, setCarts] = useState<CartType[]>([]);

  const fetchCartList = async () => {
    try {
      const response = await getCartList();
      console.log(response);
      setCarts(response);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  };

  const removeCart = async (index: number, snq: number) => {
    try{
      const response = await deleteCart(snq);
      if(response){
        setCarts((prev) => {
          prev.splice(index, 1);
          return prev;
        });
      }
    }catch(error){
      if(error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchCartList();
  }, []);

  if(isLoading){
    return <div className="w-full h-[400px] flex justify-center items-center">
        <BeatLoader color="#36d7b7"/>
      </div>
  }else{
    return(
      <div>
         <div className='text--black-100 font-bold text-5 my-6 text-center'>
            장바구니 등록한 <span className='text-mw'>{carts.length}개</span>의 상품을 확인해 보세요
        </div>
        {carts.length === 0 ? <div className='p-5 text-center'>장바구니에 등록한 상품이 없습니다.</div> : carts.map((info, index) => {
          return (
              <div className='border-b-[1px] border--black-80'>
                <CartItem onClick={() => removeCart(index, info.snq)} info={info}/>
              </div>
          );})}
      </div>
    )
  }}
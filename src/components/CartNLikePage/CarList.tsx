import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import getStoredState from 'redux-persist/es/integration/getStoredStateMigrateV4';
import { CartType, deleteCart, getCartList } from '../../api/axios';
import Loading from '../../pages/LoadingPage';
import CartItem from './CartItem';

// TODO: 429해결되면 삭제하기
const dummyCart:CartType[] = [
  {
    snq: 123,
    loanName: "미소금융 취약계층임차보증금대출",
    loanDescription: "취약계층 자립자금 지원대상자 중 개인신용평점 하위 20% 또는 차상위계층 이하 또는 근로장려금 신청 대상자(수급자)이며, 85㎡ 이하, 임차보증금 2억원(수도권 3억원) 이하 거주자 또는 3개월 이내 거주 예정인 자",
    loanTarget: ["금융취약계층"],
    baseRate: "고정금리",
    rate: "2.5%",
  },{
    snq: 456,
    loanName: "하나원큐신용대출",
    loanDescription: "1. 현 직장 6개월이상 국민건강보험 직장인 가입 손님으로 스크래핑에 의해 건강보험료 6개월이상 정상 납입 손님2. CB사 소득에 의해 대출한도가 산정되는 손님",
    loanTarget: ["근로자"],
    baseRate: "-",
    rate: "-",
  },{
    snq: 628,
    loanName: "참신한중금리",
    loanDescription: "NICE 신용평점 590점 이상인 고객 중 현 직장 근속기간 만 3개월 이상  & 연소득 2,600만원 이상인 급여소득자",
    loanTarget: ["근로자", "사업자", "소상공인"],
    baseRate: "-",
    rate: "5.8~19.4%",
  },{
    snq: 789,
    loanName: "하나원큐신용대출",
    loanDescription: "1. 현 직장 6개월이상 국민건강보험 직장인 가입 손님으로 스크래핑에 의해 건강보험료 6개월이상 정상 납입 손님2. CB사 소득에 의해 대출한도가 산정되는 손님",
    loanTarget: ["근로자"],
    baseRate: "-",
    rate: "-",
  }
]
// TODO: 여기까지

export default function CartList(){
  // const [isLoading, setIsLoading] = useState(true);
  const [carts, setCarts] = useState<CartType[]>(dummyCart);

  // const fetchCartList = async () => {
  //   try {
  //     const response = await getCartList();
  //     console.log(response);
  //     setCarts(response);
  //     setIsLoading(false);
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       console.log(error.message);
  //     }
  //   }
  // };

  const removeCart = async (snq: number) => {
    // try{
    //   const response = await deleteCart(snq);
    //   if(response){
        setCarts((current) =>
        current.filter((cart) => cart.snq !== snq)
      );
    //   }
    // }catch(error){
    //   if(error instanceof AxiosError) {
    //     console.log(error.message);
    //   }
    // }
  };

  // useEffect(() => {
  //   fetchCartList();
  // }, []);

  // if(isLoading){
  //   return <div className="w-full h-[400px] flex justify-center items-center">
  //       <BeatLoader color="#36d7b7"/>
  //     </div>
  // }else{
    return(
      <div>
         <div className='text--black-100 font-bold text-5 my-6 text-center'>
            장바구니 등록한 <span className='text-mw'>{carts.length}개</span>의 상품을 확인해 보세요
        </div>
        {carts.length === 0 ? <div className='p-5 text-center'>장바구니에 등록한 상품이 없습니다.</div> : carts.map((info) => {
          return (
              <div className='border-b-[1px] border--black-80'>
                <CartItem onClick={() => removeCart(info.snq)} info={info}/>
              </div>
          );})}
      </div>
    )
  }
// }
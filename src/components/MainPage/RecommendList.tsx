import React, { useState, useEffect } from 'react';
import Slick from '../../slider/slick';
import {
  getProductType,
  memberRecommend,
  nomemberRecommend,
  getUserInfo,
  ProductList,
} from '../../api/axios';
type props = {};

const RecommendList = (props: props) => {
  const [memberlists, setmemberlists] = useState<ProductList>();
  const [nomemberlists, setnomemberlists] = useState<ProductList>();
  const [login, setlogin] = useState(Boolean);
  useEffect(() => {
    async function fetchMemberData() {
      const memberrecommendList = await memberRecommend();
      setmemberlists(memberrecommendList);
    }
    async function fetchNoMemberData() {
      const nomemberrecommendList = await nomemberRecommend();
      setnomemberlists(nomemberrecommendList);
    }
    async function fetchLogin() {
      const { ok, userInfoData } = await getUserInfo();
      setlogin(userInfoData);
    }
    fetchMemberData();
    fetchNoMemberData();
    fetchLogin();
  }, []);
  //로그인이 되어 있을 때
  return login ? (
    <div className='relative top-10 max-w-ms z-0'>
      <p className='font-semibold text-2xl p-10 ml-3 box-border'>
        <span className='text-mw'>미왕이</span> 님을 위한 추천상품이에요.
      </p>
      {/* 추천 상품 리스트 보여주기 */}
      <div className='SlickContainer w-80 h-36 mx-auto m-auto box-border'>
        <Slick>
          {memberlists?.content.map((item) => (
            <div
              key={item.snq}
              className='flex flex-col items-center justify-center mt-[40px] ml-[20px]'
            >
              <div className='w-[260px] h-[50px] align-middle text-[15px]'>
                <p>{item.loanName}</p>
              </div>
              <div className='w-[280px] h-[100px] text-[14px] whitespace-normal overflow-hidden'>
                <p>{item.loanDescription.slice(0, 80)}...</p>
              </div>
            </div>
          ))}
        </Slick>
      </div>
    </div>
  ) : (
    //로그인이 안 되어 있을 때
    <div className='relative top-10 max-w-ms z-0'>
      <p className='font-semibold text-2xl p-10 ml-3 box-border'>
        추천상품이 있어요
      </p>
      {/* 추천 상품 리스트 보여주기 */}
      <div className='SlickContainer w-80 h-36 mx-auto box-border'>
        <Slick>
          {nomemberlists?.content.map((item) => (
            <div
              key={item.snq}
              className='flex flex-col items-center justify-center mt-[40px] ml-[20px]'
            >
              <div className='w-[260px] h-[50px] align-middle text-[15px]'>
                <p>{item.loanName}</p>
              </div>
              <div className='w-[280px] h-[100px] text-[14px] whitespace-normal overflow-hidden'>
                <p>{item.loanDescription.slice(0, 80)}...</p>
              </div>
            </div>
          ))}
        </Slick>
      </div>
    </div>
  );
};

export default RecommendList;

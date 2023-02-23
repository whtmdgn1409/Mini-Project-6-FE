import React, { useState, useEffect } from 'react';
import Slick from '../../slider/slick';
import {
  memberRecommend,
  nomemberRecommend,
  ProductData,
  getUserInfo,
  UserInfoType,
} from '../../api/axios';
import { autoCheck } from '../../features/authSlice';
import { token } from '../../api/core/api';
import { useSelector } from 'react-redux';
type props = {};

const RecommendList = (props: props) => {
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  const [memberlists, setmemberlists] = useState<ProductData>();
  const [nomemberlists, setnomemberlists] = useState<ProductData>();
  const [user, setUser] = useState<UserInfoType | null>(null);

  useEffect(() => {
    if (isLogin) {
      async function fetchMemberData() {
        const memberrecommendList = await memberRecommend();
        setmemberlists(memberrecommendList);
      }
      async function fetchData() {
        const { ok, userInfoData } = await getUserInfo();
        if (ok) {
          setUser(userInfoData);
        }
      }
      fetchMemberData();
      fetchData();
    } else {
      async function fetchNoMemberData() {
        const nomemberrecommendList = await nomemberRecommend();
        setnomemberlists(nomemberrecommendList);
      }
      fetchNoMemberData();
    }
  }, [isLogin]);
  //로그인이 되어 있을 때
  return isLogin ? (
    <div className='relative top-8 max-w-ms z-0'>
      <p className='font-semibold text-xl p-10 ml-3 box-border'>
        <span className='text-mw'>{user?.name}</span> 님을 위한 추천상품이에요.
      </p>
      {/* 추천 상품 리스트 보여주기 */}
      <div className='SlickContainer w-80 h-36 mx-auto m-auto box-border'>
        <Slick>
          {memberlists?.recommendData?.content.map((item) => (
            <div
              key={item.snq}
              className='flex flex-col items-center justify-center mt-[40px] ml-[20px]'
            >
              <div className='w-[260px] h-[50px] align-middle text-[15px]'>
                <p>{item.loanName}</p>
              </div>
              <div className='w-[280px] h-[100px] text-[14px] whitespace-normal overflow-hidden'>
                <p>{item.loanDescription.slice(0, 80)}</p>
              </div>
            </div>
          ))}
        </Slick>
      </div>
    </div>
  ) : (
    //로그인이 안 되어 있을 때
    <div className='relative top-8 max-w-ms z-0'>
      <p className='font-semibold text-2xl p-10 ml-3 box-border'>
        추천상품이 있어요
      </p>
      {/* 추천 상품 리스트 보여주기 */}
      <div className='SlickContainer w-80 h-36 mx-auto box-border'>
        <Slick>
          {nomemberlists?.recommend?.content.map((item) => (
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

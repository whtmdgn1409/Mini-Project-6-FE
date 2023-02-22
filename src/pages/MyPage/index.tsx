import React, { useState, useEffect } from 'react';
import LoanBox from '../../components/MyPage/LoanBox';
import Slider from 'react-slick';
import LikeBox from '../../components/MyPage/LikeBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/index.css';
import { useNavigate } from 'react-router-dom';
import { getFavor } from '../../api/axios';
import { FavorType } from '../../api/axios';
import { IoBookmarksOutline } from 'react-icons/io5';

type Props = {};

const Mypage = (props: Props) => {
  const [favor, setFavor] = useState<Array<FavorType>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { ok, favorData } = await getFavor();
      setFavor(favorData);
    }
    fetchData();
  }, []);
  console.log(favor);

  const settings = {
    dots: true,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <div className='mx-[60px]'>
      <h1 className='text-[20px]'>
        <span className='text-mw font-bold'>미왕이</span> 님 안녕하세요!
      </h1>
      <div className='mt-[20px]'>
        <span className='text-[16px]'>이용 중인 대출 3건</span>
        <div className='flex gap-5 flex-col items-center'>
          <LoanBox />
          <LoanBox />
          <button className='mwBtn !h-[30px] !text-[14px]'>더 보기</button>
        </div>
      </div>
      <div>
        <h2 className='text-[20px] font-bold my-[20px] flex'>
          관심 상품 <IoBookmarksOutline className='text-[24px] ml-2' />
        </h2>
        {favor ? (
          <Slider {...settings} dotsClass='mypage-dots' className='likeItem'>
            {favor.map((item) => (
              <LikeBox item={item} key={item.snq} />
            ))}
          </Slider>
        ) : (
          <div className='p-5 text-center'>관심 상품이 없습니다.</div>
        )}
      </div>
      <div>
        <h2 className='text-[20px] font-bold mt-[20px] mb-[10px]'>
          회원 정보 수정
        </h2>
        <span
          onClick={() => navigate('/userinfo/pwcheck')}
          className='cursor-pointer'
        >
          비밀번호 | 맞춤 정보 변경
        </span>
      </div>
    </div>
  );
};

export default Mypage;

import React from 'react';
import LoanBox from '../../components/MyPage/LoanBox';
import Slider from 'react-slick';
import LikeBox from '../../components/MyPage/LikeBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Mypage = (props: Props) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
  };
  return (
    <div className='mx-[60px] mb-[500px]'>
      <h1 className='text-[20px]'>
        <span className='text-mw font-bold'>미왕이</span> 님 안녕하세요!
      </h1>
      <div className='mt-[20px]'>
        <span className='text-[14px]'>이용 중인 대출 3건</span>
        <div className='flex gap-5 flex-col items-center'>
          <LoanBox />
          <LoanBox />
          <button className='mwBtn !h-[30px] !text-[14px]'>더 보기</button>
        </div>
      </div>
      <h2 className='text-[20px] font-bold my-[20px]'>관심 상품</h2>
      <Slider {...settings} dotsClass='mypage-dots' className='likeItem'>
        <LikeBox />
        <LikeBox />
        <LikeBox />
        <LikeBox />
        <LikeBox />
      </Slider>
      <div>
        <h2 className='text-[20px] font-bold mt-[20px] mb-[10px]'>
          회원 정보 수정
        </h2>
        <span onClick={() => navigate('/userinfo')} className='cursor-pointer'>
          비밀번호 | 맞춤 정보 변경
        </span>
      </div>
    </div>
  );
};

export default Mypage;

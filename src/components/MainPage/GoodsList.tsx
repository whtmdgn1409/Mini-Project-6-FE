import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ListBox from './ListBox';
type props = {};

const items = [
  {
    title: 'MW 직장인스마트론',
    desc: '서민/중소기업 근로자들을 대상으로, 스마트폰을 통해 간편하게 생활안정자금을 지원하는 신용대출상품',
    target: '개인신용대출',
    baseRate: '고정금리/변동금리',
  },
  {
    title: 'MW 직장인스마트론',
    desc: '서민/중소기업 근로자들을 대상으로, 스마트폰을 통해 간편하게 생활안정자금을 지원하는 신용대출상품',
    target: '개인신용대출',
    baseRate: '고정금리/변동금리',
  },
  {
    title: 'MW 직장인스마트론',
    desc: '서민/중소기업 근로자들을 대상으로, 스마트폰을 통해 간편하게 생활안정자금을 지원하는 신용대출상품',
    target: '개인신용대출',
    baseRate: '고정금리/변동금리',
  },
];

const lists = {};
const GoodsList = (props: props) => {
  return (
    <div className='relative'>
      <div className='box-border mt-20 ml-3 font-semibold text-xl p-10'>
        <button>
          <Link to='/' className='flex text-center align-middle'>
            <span>전체 상품</span>
            <MdKeyboardArrowRight size='28' />
          </Link>
        </button>
      </div>
      <div className='flex flex-col'>
        {items.map((item, index) => (
          <ListBox
            key={index}
            title={item.title}
            desc={item.desc}
            target={item.target}
            baseRate={item.baseRate}
          />
        ))}
      </div>
    </div>
  );
};

export default GoodsList;

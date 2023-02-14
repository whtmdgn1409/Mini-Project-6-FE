import React from 'react';
import { IoBookmarksOutline } from 'react-icons/io5';
type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <section className='w-[480px] m-auto'>
      <div className='bg-mw w-[480px] h-[230px] top-40 absolute'></div>
      <div className='relative shadow-default p-2 w-96 h-52 mx-auto my-3 rounded-default border text-left flex bg-mw-lGray'>
        <div className='mx-4 mt-12'>
          <p className='font-bold text-xl'>
            <span className='text-mw'>MW</span> 중소기업취업청년 전월세보증금
            대출
          </p>
          <p className='text-sm '>
            서민/중소기업 근로자들을 대상으로, 스마트폰을 통해 간편하게
            생활안정자금을 지원하는 신용대출상품
          </p>
          <div className='flex gap-4 justify-center h-[70px] items-center'>
            <div className='font-semibold text-lg border h-[35px] my-auto border-mw rounded-default px-4 py-0.5'>
              금리 1.2%
            </div>
            <div className='font-semibold text-lg border h-[35px] border-mw rounded-default px-4 py-0.5'>
              최대한도 10,000만원
            </div>
          </div>
        </div>
        <button className='absolute bottom-40 right-5'>
          <IoBookmarksOutline className='text-3xl' />
        </button>
      </div>
      <ul className='z-20 mt-24 flex justify-center gap-8 font-semibold '>
        <li className=' hover:text-mw hover:border-b-2 cursor-pointer'>
          상품요건
        </li>
        <li className=' hover:text-mw hover:border-b-2 cursor-pointer'>
          지원대상요건
        </li>
        <li className=' hover:text-mw hover:border-b-2 cursor-pointer'>
          기타 상품 정보
        </li>
      </ul>
    </section>
  );
};

export default ProductDetail;

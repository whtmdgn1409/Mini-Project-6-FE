import { useEffect, useState } from 'react';
import { IoBookmarksOutline } from 'react-icons/io5';
import { getProductDetail } from '../../api/axios';
import Etc from '../../components/ProductDetail/Etc';
import Loan from '../../components/ProductDetail/Loan';
import Target from '../../components/ProductDetail/Target';
import { ProductDetail } from './interface';
import { defaultProductData } from './const';

const lists = ['상품요건', '지원 대상 요건', '기타 상품 정보'];

const ProductDetail = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [detail, setDetail] = useState<ProductDetail>(defaultProductData);

  useEffect(() => {
    const getDetail = async () => {
      const res = await getProductDetail();
      setDetail(res);
    };
    getDetail();
  }, []);

  return (
    <section className='w-[375px]'>
      <div className='bg-mw w-[375px] h-[230px] top-40 absolute'></div>
      <div className=' relative shadow-default p-2 w-[335px] h-52 mx-auto my-3 rounded-default border text-left flex bg-mw-lGray'>
        <div className='mx-4 mt-12'>
          <p className='font-bold text-xl'>
            <span className='text-mw'>MW</span>
            {detail?.loan?.loanName}
          </p>
          <p className='text-sm '></p>
          <div className='gap-4 justify-center h-[70px] items-center'>
            <div className='font-semibold text-lg border-2 h-[30px] mt-2 text-center border-mw rounded-default'>
              금리 {detail?.loan?.rate}
            </div>
            <div className='font-semibold text-lg border-2 h-[30px] mt-2 text-center border-mw rounded-default'>
              최대한도 {detail?.loan?.loanLimit}
            </div>
          </div>
        </div>

        <button className='absolute bottom-40 right-5'>
          <IoBookmarksOutline className='text-3xl' />
        </button>
      </div>
      <ul className='z-20 mt-24 flex justify-center gap-8'>
        {lists.map((list, i) => {
          return (
            <li
              key={i}
              className={
                i === activeMenu
                  ? 'cursor-pointer text-mw font-bold border-solid border-mw border-b-4'
                  : 'cursor-pointer text-mw-gray font-semibold hover:text-mw hover:border-b-4 hover:border-mw'
              }
              onClick={() => setActiveMenu(i)}
            >
              {list}
            </li>
          );
        })}
      </ul>
      <div className='pt-6'>
        {
          [
            <Loan loanItem={detail?.loan} />,
            <Target target={detail?.target} />,
            <Etc etc={detail?.etc} />,
          ][activeMenu]
        }
      </div>
    </section>
  );
};
export default ProductDetail;

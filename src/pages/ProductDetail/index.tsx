import { useEffect, useState } from 'react';
import { IoBookmarksOutline } from 'react-icons/io5';
import { getProductDetail } from '../../api/axios';
import Etc from '../../components/ProductDetail/Etc';
import Loan from '../../components/ProductDetail/Loan';
import Target from '../../components/ProductDetail/Target';

const lists = ['상품요건', '지원 대상 요건', '기타 상품 정보'];

export interface EtcTypes {
  contact: string;
  earlyRedemptionFee: string;
  etcNode: string;
  homepage: string;
  joinMethod: string;
  primeCondition: string;
  provider: string;
  userOffice: string;
}

export interface LoanTypes {
  baseRate: string;
  gracePeriod: string;
  loanLimit: string;
  loanName: string;
  overdueRate: string;
  rate: string;
  repayMethod: string;
  repayPeriod: string;
  usge: string;
  wholePeriod: string;
}

export interface TargetTypes {
  age: string;
  area: string;
  creditScore: string;
  income: string;
  loanDescription: string;
  loanTarget: string;
}

export interface ProductDetail {
  etc: EtcTypes;
  loan: LoanTypes;
  target: TargetTypes;
}

const ProductDetail = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [detail, setDetail] = useState<ProductDetail>({
    etc: {
      divisionOffice: '',
      earlyRedemptionFee: '',
      etcNote: '',
      homepage: '',
      primeCondition: '',
      provider: '',
      userOffice: '',
    },
    loan: {
      baseRate: '',
      gracePeriod: '',
      loanLimit: '',
      loanName: '',
      rate: '',
      repayMethod: '',
      repayPeriod: '',
      overdueRate: '',
      usge: '',
      wholePeriod: '',
    },
    target: {
      age: '',
      area: '',
      creditScore: '',
      income: '',
      loanDescription: '',
      loanTarget: '',
    },
  });

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
            <span className='font-semibold text-lg border h-[35px] my-auto border-mw rounded-default px-4 py-0.5'>
              금리 {detail?.loan?.rate}
            </span>
            <span className='font-semibold text-lg border h-[35px] border-mw rounded-default px-4 py-0.5'>
              최대한도 {detail?.loan?.loanLimit}
            </span>
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

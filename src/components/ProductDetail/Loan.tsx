import { LoanTypes } from '../../pages/ProductDetail/interface';
const Loan = (props: { loanItem: LoanTypes }) => {
  return (
    <ul className='px-[20px]'>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>최대 거치 기간</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.gracePeriod === 'null'
            ? '기관 문의'
            : props.loanItem.gracePeriod}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 한도</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.loanLimit === 'null'
            ? '기관 문의'
            : props.loanItem.loanLimit}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>금융상품명</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.loanName === 'null'
            ? '기관 문의'
            : props.loanItem.loanName}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>연체이자율</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.overdueRate === 'null'
            ? '기관 문의'
            : props.loanItem.overdueRate}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>금리</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.rate === 'null' ? '기관 문의' : props.loanItem.rate}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>상환 방법</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.repayMethod === 'null'
            ? '기관 문의'
            : props.loanItem.repayMethod}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>최대 상환 기간</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.repayPeriod === 'null'
            ? '기관 문의'
            : props.loanItem.repayPeriod}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>용도</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.usge === 'null' ? '기관 문의' : props.loanItem.usge}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>총 대출기간</span>
        <span className='basis-2/3 text-right'>
          {props.loanItem.wholePeriod === 'null'
            ? '기관 문의'
            : props.loanItem.wholePeriod}
        </span>
      </li>
    </ul>
  );
};

export default Loan;

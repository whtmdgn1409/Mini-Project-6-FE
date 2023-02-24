import { TargetTypes } from '../../pages/ProductDetail/interface';

const Target = (props: { target: TargetTypes }) => {
  return (
    <ul className='px-[20px]'>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>연령</span>
        <span className='basis-2/3 text-right'>
          {props.target.age === 'null' ? '기관 문의' : props.target.age}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>
          거주지역원금균등분할상환
        </span>
        <span className='basis-2/3 text-right'>
          {props.target.area === 'null' ? '기관 문의' : props.target.area}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>신용등급</span>
        <span className='basis-2/3 text-right'>
          {props.target.creditScore === 'null'
            ? '기관 문의'
            : props.target.creditScore}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>소득</span>
        <span className='basis-2/3 text-right'>
          {props.target.income === 'null' ? '기관 문의' : props.target.income}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>
          지원대상 상세조건
        </span>
        <span className='basis-2/3 text-right'>
          {props.target.loanDescription === 'null'
            ? '기관 문의'
            : props.target.loanDescription}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대상</span>
        <span className='basis-2/3 text-right'>
          {props.target.loanTarget === 'null'
            ? '기관 문의'
            : props.target.loanTarget}
        </span>
      </li>
    </ul>
  );
};

export default Target;

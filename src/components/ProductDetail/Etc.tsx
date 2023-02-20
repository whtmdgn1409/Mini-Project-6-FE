import { EtcTypes } from '../../pages/ProductDetail';

const Etc = (props: { etc: EtcTypes }) => {
  console.log(props);
  return (
    <ul className='px-[20px]'>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>연락처</span>
        <span className='basis-2/3 text-right'>{props.etc.contact}</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>중도상환수수료</span>
        <span className='basis-2/3 text-right'>
          {props.etc.earlyRedemptionFee}
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>기타참고사항</span>
        <span className='basis-2/3 text-right'>{props.etc.etcNode}</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>관련사이트</span>
        <span className='basis-2/3 text-right'>{props.etc.homepage}</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>가입(신청)방법</span>
        <span className='basis-2/3 text-right'>{props.etc.joinMethod}</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>
          우대금리/가산금리 조건
        </span>
        <span className='basis-2/3 text-right'>{props.etc.primeCondition}</span>
      </li>{' '}
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>제공기관명</span>
        <span className='basis-2/3 text-right'>{props.etc.provider}</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>취급기관</span>
        <span className='basis-2/3 text-right'>{props.etc.userOffice}</span>
      </li>
    </ul>
  );
};
export default Etc;

const Target = () => {
  return (
    <ul className='px-[20px]'>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>지원 대상 요건</span>
        <span className='basis-2/3 text-right'></span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 계좌 번호</span>
        <span className='basis-2/3 text-right'>123-456-78-910</span>
      </li>
    </ul>
  );
};

export default Target;

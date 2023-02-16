type CartItemProps = {
  onClick: () => void;
};

export default function CartItem({ onClick }: CartItemProps) {
  //  TODO: 로그인 기능되면 데이터 보고 props로 데이터 그리게 하기
  return (
    <div className='relative w-full h-[200px] flex justify-between items-center px-[32px]'>
      <button
        onClick={onClick}
        className='absolute top-8 right-8 text-[#2AC1BC] text-3 font-bold'
      >
        X
      </button>
      <div>
        <div className='text--black-100  text-[13px] bg-[#FFD770] rounded-[16px] h-5 w-[60px] flex items-center justify-center'>
          대출
        </div>
        <div className='text-[20px] font-medium text--black-90'>
          중소기업취업청년대출
        </div>
        <div className='text-[#828F9C] text-[13px]'>#청년대출</div>
      </div>
      <div className='flex flex-col justify-center items-end'>
        <div className='-text--black-50  text-[13px]'>최고연</div>
        <div className=' text-mw  text-[20px] font-semibold'>7.00%</div>
        <div className='text--black-50  text-[13px]'>(24개월)</div>
      </div>
    </div>
  );
}

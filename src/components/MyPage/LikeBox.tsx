import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FavorType, deleteFavor } from '../../api/axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  item: FavorType;
};

const LikeBox = ({ item }: Props) => {
  const navigate = useNavigate();
  const notify = () => toast.success('관심 상품이 삭제되었습니다.');

  return (
    <div className='m-auto w-[180px] h-[250px] bg-mw rounded-default shadow-default text-white p-5'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <span className='font-bold text-center truncate w-full text-[18px]'>
          {item.loanName}
        </span>
        <span className='font-bold text-center text-[14px]'>
          {item.loanLimit}
        </span>
        <div>
          <div className='flex items-center gap-2'>
            <span className='text-[14px] font-bold whitespace-nowrap'>
              금리
            </span>
            <span className='text-[12px]'>{item.rate}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[14px] font-bold whitespace-nowrap'>
              대상
            </span>
            <span className='text-[12px]'>
              {item.loanTarget.length > 1
                ? `${item.loanTarget[0]}...`
                : item.loanTarget}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[14px] font-bold whitespace-nowrap'>
              취급 기관
            </span>
            <span className='text-[12px] truncate'>{item.provider}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-5 items-center'>
        <button
          className='mwBtn-white !w-[100px] !h-[30px] !text-[12px]'
          onClick={() => navigate(`/product/${item.snq}`)}
        >
          자세히 보기
        </button>
        <button
          className='mwBtn-white !w-[100px] !h-[30px] !text-[12px]'
          onClick={() => {
            deleteFavor(item.snq);
            notify();
            setTimeout(() => location.reload, 2000);
          }}
        >
          삭제하기
        </button>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default LikeBox;

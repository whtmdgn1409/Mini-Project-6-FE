import { useNavigate } from 'react-router-dom';
import InfoSelect from '../../components/InfoSelect';

type Props = {};
const jobs = ['회사원', '재직자', '자영업자', '대학생', '군인', '무직'];
const regions = [
  '전국',
  '서울',
  '경기',
  '인천',
  '부산',
  '광주',
  '대구',
  '대전',
  '울산',
  '경북',
  '전북',
  '제주',
];

const age: number[] = [];
for (let i = 20; i < 70; i++) {
  age.push(i);
}

const banks = [
  'KEB하나은행',
  'SC제일은행',
  '국민은행',
  '신한은행',
  '외환은행',
  '우리은행',
  '한국시티은행',
  '기업은행',
  '농협',
  '수협',
  '한국산업은행',
  '부산은행',
  '전북은행',
];

const OptionalInfo = (props: Props) => {
  const navigate = useNavigate();

  return (
    <section className='w-[300px] m-auto'>
      <h1 className='text-4xl font-bold text-center'>궁금해요</h1>
      <p className='text-center mt-4 mw-lGray'>
        미왕론의 회원이 되신 것을 축하해요!🎉
        <br />
        아래 정보를 추가 입력해주시면
        <br />
        맞춤 상품도 추천해드릴게요☺
      </p>
      <form className='flex-col mt-8 text-center'>
        <InfoSelect infos={jobs} />
        <InfoSelect infos={age} />
        <InfoSelect infos={regions} />
        <InfoSelect infos={banks} />
      </form>

      <div className='flex justify-center gap-3'>
        <button className='mwBtn font-semibold mt-12 !w-[140px]'>
          제출하기
        </button>
        <button
          onClick={() => {
            navigate('/signup');
          }}
          className='mwBtn-white shadow-default font-semibold mt-12 !w-[140px]'
        >
          다음에 할게요
        </button>
      </div>
    </section>
  );
};
export default OptionalInfo;

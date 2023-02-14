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
  return (
    <section>
      <h1 className='text-4xl font-bold text-center'>추가 정보를 알려주세요</h1>
      <p className='text-center mt-4 mw-lGray'>
        나에게 꼭 맞는 상품을 추천해 드려요
      </p>

      <form className='flex-col mt-16 text-center'>
        <select className='select w-full text-mw-dGray shadow-default rounded-default font-normal text-base'>
          {jobs.map((job) => {
            return (
              <option key={job} value={job}>
                {job}
              </option>
            );
          })}
        </select>
        <select className='select w-full mt-12  text-mw-dGray shadow-default rounded-default font-normal text-base'>
          {age.map((v) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        <select className='select w-full mt-12  text-mw-dGray shadow-default rounded-default font-normal text-base'>
          {regions.map((region) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          })}
        </select>
        <select className='select w-full mt-12 text-mw-dGray shadow-default rounded-default font-normal text-base'>
          {banks.map((bank) => {
            return (
              <option key={bank} value={bank}>
                {bank}
              </option>
            );
          })}
        </select>
      </form>

      <div className='flex justify-center gap-3'>
        <button className='mwBtn font-semibold mt-12 !w-[140px]'>
          제출하기
        </button>
        <button className='mwBtn shadow font-semibold mt-12 !w-[140px]'>
          다음에 하기
        </button>
      </div>
    </section>
  );
};
export default OptionalInfo;

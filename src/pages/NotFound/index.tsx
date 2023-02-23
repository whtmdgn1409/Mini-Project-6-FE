import meewang3 from '../../assets/meewang3.png';

interface Props {}
const NotFound = (props: Props) => {
  return (
    <div className='flex-col justify-start'>
      <div className='font-bold my-3 mx-24 text-lg text-alert'>
        잘못된 접근이에요!
      </div>
      <img src={meewang3} />
    </div>
  );
};
export default NotFound;

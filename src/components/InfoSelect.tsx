interface Props {
  infos: (string | number)[];
}
const InfoSelect = ({ infos }: Props) => {
  return (
    <select className='select w-full text-mw-dGray shadow-default rounded-default font-normal text-base pl-6 mt-8'>
      {infos.map((info) => {
        return (
          <option key={info} value={info}>
            {info}
          </option>
        );
      })}
    </select>
  );
};

export default InfoSelect;

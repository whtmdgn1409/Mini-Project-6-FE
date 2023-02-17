interface Props {
  infos: (string | number)[];
  defaultValue: string;
}

const InfoSelect = ({ infos, defaultValue }: Props) => {
  const findDefaultValue = () => {
    const index = infos?.findIndex((item) => item == defaultValue);
    infos.splice(index, 1);
    console.log(defaultValue, index);
  };

  findDefaultValue();
  return (
    <select className='select w-full text-mw-dGray shadow-default rounded-default font-normal text-base pl-6 mt-8'>
      <option value='' defaultValue={defaultValue}>
        {defaultValue}
      </option>
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

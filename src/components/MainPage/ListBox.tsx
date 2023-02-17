import React from 'react';
import { Link } from 'react-router-dom';
type props = {
  title: string;
  desc: string;
  target: string;
  baseRate: string;
};
const ListBox = (props: props) => {
  return (
    <div className='boxContainer bg-mw-lGray relative w-96 h-52 mx-auto my-3 shadow-default rounded-default text-left'>
      <p className='loanTitle text-lg absolute top-7 left-8'>{props.title}</p>
      <p className='loanDesc text-xs absolute top-20 left-8 w-72'>
        {props.desc}
      </p>
      <p className='loanTarget text-xs absolute top-32 left-8'>
        {props.target}
      </p>
      <p className='loanBaseRate text-xs absolute top-40 left-8'>
        {props.baseRate}
      </p>
      <button className='absolute right-12 bottom-8 rounded-default bg-mw w-16 h-8'>
        <Link to='/'>상담</Link>
      </button>
    </div>
  );
};

export default ListBox;

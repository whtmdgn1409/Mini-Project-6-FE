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
    <div className='boxContainer relative'>
      <p className='loanTitle absolute top-29px left-30px'>{props.title}</p>
      <p className='loanDesc absolute top-81px left-30px'>{props.desc}</p>
      <p className='loanTarget absolute top-137px left-30px'>{props.target}</p>
      <p className='loanBaseRate absolute top-155px left-30px'>
        {props.baseRate}
      </p>
      <button>
        <Link to='/'>상담</Link>
      </button>
    </div>
  );
};

export default ListBox;

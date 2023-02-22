import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addCartList } from '../../api/axios';
type props = {
  snq: string;
  title: string;
  desc: string;
  target: string;
  baseRate: string;
};
const ListBox = (props: props) => {
  let description = props.desc;
  let replaceDesc = description.replace('<br/>/g', '');
  return (
    <div className='boxContainer bg-mw-lGray relative w-[350px] h-52 mx-auto my-3 shadow-default rounded-default text-left'>
      <p className='loanTitle text-lg absolute top-7 left-8'>{props.title}</p>
      <p className='loanDesc text-xs absolute top-20 left-8 w-72'>
        {replaceDesc.slice(0, 80)}...
      </p>
      <p className='loanTarget text-xs absolute top-32 left-8'>
        {props.target}
      </p>
      <p className='loanBaseRate text-xs absolute top-40 left-8'>
        {props.baseRate}
      </p>
      <button
        className='absolute right-12 bottom-8 rounded-default bg-mw w-16 h-8'
        onClick={() => addCartList(props.snq)}
      >
        추가
      </button>
    </div>
  );
};

export default ListBox;

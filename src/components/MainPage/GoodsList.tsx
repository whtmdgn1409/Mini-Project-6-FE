import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md';
import ListBox from './ListBox';
import { getProduct, getProductType } from '../../api/axios';
type props = {};

const GoodsList = (props: props) => {
  const [lists, setlists] = useState<Array<getProductType>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const productList = await getProduct();
      setlists(productList);
    }
    fetchData();
  }, []);
  return (
    <div className='relative'>
      <div className='box-border mt-20 ml-3 font-semibold text-xl p-10'>
        <button>
          <Link to='/allproduct' className='flex text-center align-middle'>
            <span>전체 상품</span>
            <MdKeyboardArrowRight size='28' />
          </Link>
        </button>
      </div>
      <div className='flex flex-col'>
        {lists.map((item, index) => (
          <ListBox
            key={index}
            snq={item.snq}
            title={item.loanName}
            desc={item.loanDescription}
            target={item.loanTarget}
            baseRate={item.ratePercent}
          />
        ))}
      </div>
    </div>
  );
};

export default GoodsList;

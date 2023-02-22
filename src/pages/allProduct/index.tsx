import React, { useState, useEffect } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getProduct, getProductType } from '../../api/axios';

type props = {};
const allProduct = (props: props) => {
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
    <div>
      {lists.map((item, i) => (
        <ListBox
          key={i}
          snq={item.snq}
          title={item.loanName}
          desc={item.loanDescription}
          target={item.loanTarget}
          baseRate={item.ratePercent}
        />
      ))}
    </div>
  );
};

export default allProduct;

import React, { useState, useEffect } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CategoryData, getAllList } from '../../api/axios';

type props = {};
const allProduct = (props: props) => {
  const [lists, setlists] = useState<Array<CategoryData>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllList(1);
      setlists(res.allData);
    };
    fetchData();
  }, []);
  console.log(lists);
  return (
    <div>
      {lists.map((item, i) => (
        <ListBox
          key={i}
          snq={item.snq}
          title={item.loanName}
          desc={item.loanDescription}
          target={item.loanTarget}
          baseRate={item.baseRate}
        />
      ))}
    </div>
  );
};

export default allProduct;

import React, { useState, useEffect } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { CategoryData, getCategoryList } from '../../api/axios';
import { useLocation } from 'react-router-dom';

type Props = {};

const CategoryPage = (props: Props) => {
  const [categoryItem, setCategoryItem] = useState<Array<CategoryData>>([]);

  const location = useLocation();
  const pathname = location.pathname.slice(10).split('&');
  const category = pathname[0];
  const keyword = decodeURIComponent(pathname[1]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategoryList(category, keyword, 1);
      setCategoryItem(res.categoryData);
    };
    fetchData();
  }, [keyword]);

  return (
    <div>
      {categoryItem ? (
        categoryItem.map((item) => {
          return (
            <ListBox
              key={item.snq}
              snq={item.snq}
              title={item.loanName}
              desc={item.loanDescription}
              target={item.loanTarget}
              baseRate={item.rate}
            />
          );
        })
      ) : (
        <div>정보를 불러올 수 없습니다.</div>
      )}
    </div>
  );
};

export default CategoryPage;

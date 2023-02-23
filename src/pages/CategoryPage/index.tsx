import React, { useState, useEffect, useRef } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { CategoryData, getCategoryList } from '../../api/axios';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
  const [categoryItem, setCategoryItem] = useState<Array<CategoryData>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const location = useLocation();
  const pathname = location.pathname.slice(10).split('&');
  const category = pathname[0];
  const keyword = decodeURIComponent(pathname[1]);

  const target = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategoryList(category, keyword, page);
      setCategoryItem(res.categoryData.content);
      setTotalPage(res.categoryData.totalPage);
      console.log(res);
    };
    fetchData();
  }, [keyword, page]);

  useEffect(() => {
    observer.observe(target.current!);
  }, []);

  const options = {
    threshold: 1.0,
    root: null,
  };

  const observerCb = () => {
    setPage(page + 1);
  };

  let observer = new IntersectionObserver(observerCb, options);

  return (
    <div>
      <h1 className='text-center font-bold text-[24px]'>{keyword}</h1>
      {categoryItem ? (
        <>
          {categoryItem.map((item) => {
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
          })}
          <div ref={target}>여기!</div>
        </>
      ) : (
        <div>정보를 불러올 수 없습니다.</div>
      )}
    </div>
  );
};

export default CategoryPage;

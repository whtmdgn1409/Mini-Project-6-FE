import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getKeywordSearch } from '../../api/axios';
import ListBox from '../../components/MainPage/ListBox';
import { CategoryData } from '../../api/axios';

type Props = {};

const SearchPage = (props: Props) => {
  const [searchResult, setSearchResult] = useState<Array<CategoryData>>([]);
  const location = useLocation();
  const pathname = location.pathname.slice(8);
  const keyword = decodeURIComponent(pathname);

  useEffect(() => {
    const fetchData = async () => {
      const { ok, searchData } = await getKeywordSearch(keyword, 1);
      setSearchResult(searchData.content);
    };
    fetchData();
  }, []);

  console.log(searchResult);
  return (
    <div>
      <h1 className='text-center font-bold text-[24px]'>검색 결과</h1>
      {searchResult.length > 0 ? (
        <>
          {searchResult.map((item) => {
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
          <div>여기!</div>
        </>
      ) : (
        <div className='text-center'>검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default SearchPage;

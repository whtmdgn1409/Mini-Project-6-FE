import React, { useState, useEffect } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CategoryData, getAllList } from '../../api/axios';
import Pagination from 'react-js-pagination';
import '../../assets/paging.css';
type props = {};
const allProduct = (props: props) => {
  const [lists, setlists] = useState<Array<CategoryData>>([]);
  const [page, setpage] = useState(1);
  const handlePageChange = (page: number) => {
    setpage(page);
    console.log(page);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllList(page);
      setlists(res.allData);
    };
    fetchData();
  }, [page]);
  return (
    <div>
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
      <div>
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={840} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={'‹'} // "이전"을 나타낼 텍스트
          nextPageText={'›'} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>
    </div>
  );
};

export default allProduct;

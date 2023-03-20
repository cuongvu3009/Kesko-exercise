import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './app.css';
import ListItem from './components/listItem/ListItem';
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';
import { IOrderDocument } from './type';

export function App() {
  const [ordersData, setOrdersData] = useState<IOrderDocument[] | undefined>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orderPerPage, setOrderPerPage] = useState<number>(20);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/orders')
      .then((data) => setOrdersData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const lastOrderIndex = currentPage * orderPerPage;
  const firstOrderIndex = lastOrderIndex - orderPerPage;
  const currentOrders = ordersData?.slice(firstOrderIndex, lastOrderIndex);

  return (
    <>
      <div className='title'>
        <Search />
        <div className='list'>
          {currentOrders?.map((order: IOrderDocument) => {
            return <ListItem {...order} />;
          })}
        </div>
        <Pagination
          totalPosts={ordersData?.length}
          postsPerPage={orderPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

import { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axiosIntance';
import Pagination from '../pagination/Pagination';
import './search.css';

const Search = () => {
  const [products, setProducts] = useState<any>([]);
  const [currentProduct, setCurrentProduct] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage, setProductPerPage] = useState<number>(20);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentShippedDate, setCurrentShippedDate] = useState();

  const handleProductClick = async (ProductID: any) => {
    await axiosInstance
      .get(`/orders/find/${ProductID}`)
      .then((data) => {
        setIsOpen(true);
        setCurrentProduct(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosInstance('/products')
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  const lastOrderIndex = currentPage * productPerPage;
  const firstOrderIndex = lastOrderIndex - productPerPage;
  const currentProducts = products?.slice(firstOrderIndex, lastOrderIndex);

  return (
    <div className='search-container'>
      <h2>Filter order by Product</h2>
      <button style={{ marginBottom: '20px' }} onClick={() => setShow(!show)}>
        {!show ? 'Show Products' : 'Hide products'}
      </button>

      {show && (
        <div
          style={{
            backgroundColor: '#1b9086',
            padding: '20px',
            borderRadius: '15px',
          }}
        >
          <div className='list'>
            {currentProducts.map((product: any) => {
              return (
                <button
                  onClick={() => handleProductClick(product.ProductID)}
                  style={{ margin: '5px', backgroundColor: '#c43531' }}
                >
                  {product.ProductName}
                </button>
              );
            })}
          </div>
          <Pagination
            totalPosts={products?.length}
            postsPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}

      {currentProduct && isOpen && (
        <div>
          <div className='popup-container-search'>
            <div className='popup-body-search'>
              <p className='shippedDate'>
                {currentShippedDate
                  ? `This order was shipped at: ${currentShippedDate}`
                  : 'This order not yet shipped!'}
              </p>
              {currentProduct.map((i: any) => {
                return (
                  <div>
                    <button
                      onClick={() =>
                        setCurrentShippedDate(i.OrderInfo[0].ShippedDate)
                      }
                    >
                      {i.OrderID}
                    </button>
                  </div>
                );
              })}
              <button
                className='btn btn-search'
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

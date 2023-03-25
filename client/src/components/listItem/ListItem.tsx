import { useEffect, useState } from 'react';
import { IOrderData, IOrderDetailst, IOrderDocument } from '../../type';
import { axiosInstance } from '../../util/axiosIntance';
import './listItem.css';

const ListItem = ({ order }: IOrderData) => {
  const [currentOrder, setCurrentOrder] = useState<IOrderDocument>();
  const [orderDetails, setOrderDetails] = useState<IOrderDetailst[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (order: any) => {
    setCurrentOrder(order.OrderID);
    setIsOpen(true);
  };

  if (currentOrder) {
    useEffect(() => {
      axiosInstance(`/orders/${currentOrder}`)
        .then((data) => setOrderDetails(data.data))
        .catch((err) => console.log(err));
    }, [currentOrder]);
  }

  return (
    <>
      {/* popup to show single order info */}
      {orderDetails && isOpen && (
        <div className='popup-container'>
          <div className='popup-body'>
            <h2 style={{ color: 'green' }}>Products List</h2>
            {orderDetails.map((i: any) => {
              return (
                <>
                  <h4>
                    #ID {i.ProductID}: {i.ProductInfo[0].ProductName} (
                    {i.Quantity}
                    kpl *{i.UnitPrice}€) - Discount: {i.Discount * 100}%
                  </h4>
                </>
              );
            })}

            <button className='btn' onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className='listItem-container'>
        <div className='listItem-info'>
          <div className='info'>
            <label htmlFor='' className='info-label mobile-hide'>
              Shopping address
            </label>
            <h2 className='info-text mobile-hide'>
              {order.ShipAddress}, {order.ShipPostalCode}, {order.ShipCity},{' '}
              {order.ShipCountry}
            </h2>
          </div>
          <div className='info'>
            <label htmlFor='' className='info-label'>
              Customer name
            </label>
            <h2 className='info-text'>{order.CustomerInfo![0].ContactName}</h2>
          </div>
          <div className='info'>
            <label htmlFor='' className='info-label'>
              OrderID
            </label>
            <h2 className='info-text'>{order.OrderID}</h2>
          </div>
        </div>
        <button className='detail-btn' onClick={() => handleClick(order)}>
          View Details
        </button>
      </div>
    </>
  );
};

export default ListItem;

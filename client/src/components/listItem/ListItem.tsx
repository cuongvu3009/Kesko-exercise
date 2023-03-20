import React from 'react';
import './listItem.css';

const ListItem = ({
  ShipAddress,
  ShipCity,
  ShipPostalCode,
  ShipCountry,
  CustomerInfo,
  OrderID,
}: any) => {
  let products =
    'toothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrusttoothrust';
  return (
    <div className='listItem-container'>
      <div className='listItem-info'>
        <div className='info'>
          <label htmlFor='' className='info-label'>
            Shopping address
          </label>
          <h2 className='info-text'>
            {ShipAddress}, {ShipPostalCode}, {ShipCity}, {ShipCountry}
          </h2>
        </div>
        <div className='info'>
          <label htmlFor='' className='info-label'>
            Customer name
          </label>
          <h2 className='info-text'>{CustomerInfo[0].ContactName}</h2>
        </div>
        <div className='info'>
          <label htmlFor='' className='info-label'>
            OrderID
          </label>
          <h2 className='info-text'>{OrderID}</h2>
        </div>
      </div>
      <button className='detail-btn'>View Details</button>
    </div>
  );
};

export default ListItem;

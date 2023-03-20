import React from 'react';
import './listItem.css';

const ListItem = () => {
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
            59 Kannelmaki KannelmakiK annelmakiKannelmak iKannelmaki
          </h2>
        </div>
        <div className='info'>
          <label htmlFor='' className='info-label'>
            Customer name
          </label>
          <h2 className='info-text'>fqCuongCuong CuongCuong CuongCuong</h2>
        </div>
        <div className='info'>
          <label htmlFor='' className='info-label'>
            Products
          </label>
          <h2 className='info-text'>{products.substring(0, 20)}...</h2>
        </div>
      </div>
      <button className='detail-btn'>View Details</button>
    </div>
  );
};

export default ListItem;

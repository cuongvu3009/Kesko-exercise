import React from 'react';
import './search.css';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='search-container'>
      <h2>Filter orders by product name</h2>
      <div className='search-box'>
        <input placeholder='Aniseed Syrup' className='search-input'></input>

        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;

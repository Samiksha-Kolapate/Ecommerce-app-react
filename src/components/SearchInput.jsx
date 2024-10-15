import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { searchProductListSaga } from '../Store/Products/productAction.js';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    let value = event.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    const getProduct = setTimeout(() => {

      dispatch(searchProductListSaga(searchQuery));
    }, 500);

    return () => clearTimeout(getProduct);
  }, [searchQuery]);

  return (
    <>
      <input
        type="text"
        className="form-control w-100 mx-3 rounded bg-light px-3 py-2 text-sm text-muted disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ height: '40px', maxWidth: '250px', border: '1px solid #ced4da' }}
        onChange={handleSearch}
        placeholder="Search"
      ></input>
      
    </>
  );
};

export default SearchInput;

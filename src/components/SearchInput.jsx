import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Header from './Layout/Header';
import ProductCard from '../container/ProductCard';

const SearchInput = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to all products if query is empty
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default SearchInput;

import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ cart,wishlist,isAuthenticated,setIsAuthenticated}) => {
  
  return (
    <div>
      <Header cart={cart} 
              wishlist={wishlist} 
              isAuthenticated={isAuthenticated} 
              setIsAuthenticated= {setIsAuthenticated}
              />
      <main style={{ minHeight:'70vh '}}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};




export default Layout;

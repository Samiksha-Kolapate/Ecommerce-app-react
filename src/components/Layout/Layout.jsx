import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';


const Layout = ({ cart,wishlist}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Header cart={cart} 
              wishlist={wishlist} 
              isAuthenticated={isAuthenticated} 
              onLogout={handleLogout}/>
      <main style={{ minHeight:'70vh '}}>
        <Toaster />
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};




export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Layout = (props) => {

  return (
    <div>
      <Header
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
      />
      <main style={{ minHeight: '60vh ', marginTop: "8rem",marginBottom:"4rem" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

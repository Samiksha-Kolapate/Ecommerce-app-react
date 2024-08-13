import React from 'react';
import {Helmet} from "react-helmet";
import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header/>
      <main style={{ minHeight:'70vh '}}>
        {children}
      </main>
      {/* <Footer/> */}
    </div>
  );
};

Layout.defaultProps = {
  title: 'eShopping - shop now',
  description: 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - eShopping.in',
  keywords: 'mern,react,node,mongoDB',
  author: 'Samiksha',
};



export default Layout;

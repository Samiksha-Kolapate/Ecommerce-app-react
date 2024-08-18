import React from 'react'
import {Helmet} from "react-helmet";

const Metapage = ({ title, description, keywords, author,children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            {children}
        </>
    )
}

Metapage.defaultProps = {
    title: 'eShopping - shop now',
    description: 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - eShopping.in',
    keywords: 'mern,react,node,mongoDB',
    author: 'Samiksha',
  };

export default Metapage
import React from 'react'
import Layout from '../components/Layout/Layout'
import ProductCard from '../components/ProductCard'

const Wishlist = ({wishlist}) => {
    return (
        <Layout title={"My Wishlist"}>

            <div className="container mt-4">
                <h2>Your Wishlist</h2>
                <div className="d-flex flex-wrap">
                    {wishlist.length > 0 ? (
                        wishlist.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    ) : (
                        <p>Your wishlist is empty</p>
                    )}
                </div>
            </div>

        </Layout>
    )
}

export default Wishlist;
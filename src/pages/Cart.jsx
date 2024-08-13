// Cart.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout/Layout';

const Cart = ({ cart }) => {
    return (
        <Layout title={"My Cart"}>
            <div className="container mt-4">
                <h2>Your Cart</h2>
                <div className="d-flex flex-wrap">
                    {cart.length > 0 ? (
                        cart.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Cart;

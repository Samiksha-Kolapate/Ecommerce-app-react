// Cart.jsx
import React from 'react';
import ProductCard from '../container/ProductCard';
import Layout from '../components/Layout/Layout';
import Metapage from '../components/Layout/Metapage';

const Cart = ({ cart }) => {
    console.log('Cart contents:', cart);  // Debugging line
    
    return (
        <>
         <Metapage title={"My Cart"}>
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
        </Metapage>
        </>
    );
}

export default Cart;

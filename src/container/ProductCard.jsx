import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
    const { product, index, handleAddToCart, handleAddToWishlist, wishlist, cart } = props;

    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        let isProductInWishlist = false;
        if (wishlist) {
            isProductInWishlist = wishlist.some(wishlistItem => product.id === wishlistItem.id);
        }
        setIsInWishlist(isProductInWishlist);
    }, [wishlist]);   // on updation it should go in wishlist;;; color changes gray to red ;; red to gray compoment did update

    const handleWishlistClick = () => {
        handleAddToWishlist(product);
    };

    return (
        <>
            <div className="card m-2 p-3 position-relative" >
                <img
                    src={product.images}
                    className="card-img-top"
                    alt={product.title}
                />

                <div className="wishlist-icon position-absolute top-0 end-0 m-2 p-3">
                    <FaHeart
                        onClick={handleWishlistClick}
                        style={{ color: isInWishlist ? 'red' : 'black', cursor: 'pointer' }}
                    />
                </div>

                <div className="card-body">
                    <div className="card-name-price">
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="card-title card-price">
                            {product.price.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                            })}
                        </h5>
                    </div>
                    <div>
                        <p className="card-text mb-2">
                            {product.description.substring(0, 100)}
                        </p>
                    </div>

                    <div className="card-name-price">
                        <Link to={`/product/${product.id}`} >
                            <button
                                className="btn btn-info ms-1"
                            >
                                More Details
                            </button>
                        </Link>

                        <button
                            className="btn btn-dark ms-1"
                            onClick={() => {
                                handleAddToCart(product);
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard
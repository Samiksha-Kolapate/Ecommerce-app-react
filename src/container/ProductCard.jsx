import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addToCartSaga } from '../store/Cart/cart.action';
import { addToWishlist, addToWishlistSaga } from '../store/Wishlist/wishlist.action';


const ProductCard = (props) => {
    const { product, index, wishlist, cart, setCart, setWishlist, isAuthenticated, handleLoginRedirect, addToCartAction, addToWishlistAction } = props;

    const [isInWishlist, setIsInWishlist] = useState(false);
    const navigate = useNavigate();
    // navigate("")

    // useEffect(() => {
    //     let isProductInWishlist = false;
    //     if (wishlist) {
    //         isProductInWishlist = wishlist.some(wishlistItem => product.id === wishlistItem.id);
    //     }
    //     setIsInWishlist(isProductInWishlist);
    // }, [wishlist]);   // on updation it should go in wishlist;;; color changes gray to red ;; red to gray compoment did update

    // const handleWishlistClick = () => {
    //     handleAddToWishlist(product);
    //     isProductInWishlist = wishlist.some(wishlistItem => product.id === wishlistItem.id);
    //     if(isProductInWishlist){
    //         return props.wishlist;
    //     }
    //     else{
    //         addToWishlistAction(product);
    //     }
    // };

    // const handleAddToCart = (product) => {
    //     if (!isAuthenticated) {
    //         handleLoginRedirect();
    //         return;
    //     }
    //     else {
    //         addToCartAction(product); // Dispatch the saga action
    //     }
        
    //             setCart(prevCart => {
        
    //                 const isProductInCart = prevCart.some(cartItem => product.id === cartItem.id);
        
    //                 if (isProductInCart) {
    //                     toast.error(product.title + " already in cart");
    //                     return prevCart;
    //                 }
    //                 else {
    //                     const updatedCart = [...prevCart, product];
    //                     localStorage.setItem("cartlength",cart.length + 1); 
    //                     toast.success(product.title + " added in cart!!")
    //                     return updatedCart;
    //                 }
    //             });
    //     // setCart([...cart,product]);    // was not updating cart as per present click ;;; giving output one step back
    // }


    const hadleCartProduct = () => {
        let exitProduct = props.cart.some(value => value.id===product.id)
        if(exitProduct){
            return
        }else{
            props.addToCartAction(product)
        }

    }


    // const handleAddToWishlist = (product) => {
    //     if (!isAuthenticated) {
    //         handleLoginRedirect();
    //         return;
    //     }
    //     else {
    //         addToWishlistAction(product);
    //     }

        //  setWishlist(prevWishlist => {
        //      const isProductInWishlist = prevWishlist.some(wishlistItem => product.id === wishlistItem.id);
        //      if (isProductInWishlist) {
        //          toast.error(product.title + " removed from wishlist")
        //          return prevWishlist.filter(wishlistItem => wishlistItem.id !== product.id);
        //      } else {
        //          localStorage.setItem("wishlength",wishlist.length + 1); 
        //          toast.success(product.title + " wishlisted!!")
        //          return [...prevWishlist, product];
        //      }
        //  });
    // };


    return (
        <>
            <div className="card mx-3 my-4 p-3 position-relative" >
                <img
                    src={product.images}
                    className="card-img-top"
                    alt={product.title}
                />

                <div className="wishlist-icon position-absolute top-0 end-0 m-2 p-3">
                    <FaHeart
                        onClick={()=>{addToWishlistAction(product)}}
                        // style={{ color: isInWishlist ? 'red' : 'black', cursor: 'pointer' }}
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
                    {/* <div> */}
                        <p className="card-text mb-2">
                            {product.description.substring(0, 100)}
                        </p>
                    {/* </div> */}

                    <div className="card-name-buttons">
                        {/* <Link to={`/product/${product.id}`} >
                            <button
                                className="btn btn-info ms-1"
                            >
                                More Details
                            </button>
                        </Link> */}

                        <button
                            className="btn btn-info ms-1"
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            More Details
                        </button>

                        <button
                            className="btn btn-dark ms-1"
                            onClick={hadleCartProduct}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartProduct.cart,
        wishlist: state.wishlistProduct.wishlist,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addToCartAction: addToCartSaga,
            addToWishlistAction: addToWishlistSaga
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addToCartSaga } from '../store/Cart/CartAction.js';
import { addToWishlistSaga, deleteToWishlistSaga } from '../store/Wishlist/WishlistAction.js';

const ProductCard = (props) => {
    // const { product, index, wishlist, cart, setCart, setWishlist, isAuthenticated, handleLoginRedirect, addToCartAction, addToWishlistAction } = props;
    // const [isInWishlist, setIsInWishlist] = useState(false);
    const { product } = props;
    const navigate = useNavigate();


    const hadleCartProduct = () => {
        if (props.isAuthenticated) {
            let existProduct = props.cart.some(value => value.id === product.id)
            if (existProduct) {
                toast.error(product.title + " already in cart");
                return;
            } else {
                props.addToCartAction(product);
                toast.success(product.title + " added in cart!!")
            }
        }
        else {
            toast.error("You have to login first")
        navigate('/login');
        }
    }

    const handleWishlistProduct = () => {
        if (props.isAuthenticated) {

            let existProduct = props.wishlist.some(value => value.id === product.id)
            if (existProduct) {
                props.deleteToWishAction(product.id);
                toast.error(product.title + " removed from wishlist");
                return;
            }
            else {
                props.addToWishlistAction(product);
                toast.success(product.title + " wishlisted!!")
            }
        } else {
            toast.error("You have to login first")
            navigate('/login'); 
        }
    }

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
                        onClick={handleWishlistProduct}
                        style={{ color: props.wishlist.some(value => value.id === product.id) ? 'maroon' : 'white', cursor: 'pointer' }}
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
                    <p className="card-text mb-2">
                        {product.description.substring(0, 100)}
                    </p>

                    <div className="card-name-buttons">
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
            addToWishlistAction: addToWishlistSaga,
            deleteToWishAction: deleteToWishlistSaga
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

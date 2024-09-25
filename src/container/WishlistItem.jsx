import React from "react";
import toast from "react-hot-toast"; 
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartSaga } from "../store/Cart/cart.action";
import { deleteToWishlistSaga } from "../store/Wishlist/wishlist.action";


function WishlistItem(props) {
    console.log(props.wishlist)

    const handleWishlistProduct = (product) => {
        let existProduct = props.cart.some(value => value.id === product.id)
        if (existProduct) {
            toast.error(product.title + " already in cart");
            return;
        } else {
            props.addToCartAction(product);
            props.deleteToWishAction(product.id);
            toast.success(product.title + " added in cart!!")
        }
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    {props.wishlist.map((product,index) => (
                        <div key={product.id ? product.id : index} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="img-fluid rounded-start"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">
                                           
                                            &nbsp;&nbsp;
                                            <span className="text-success">₹ {product.price}</span>
                                            &nbsp;&nbsp;
                                            <span className="badge bg-success">{product.discount}</span>
                                        </p>
                                        <div className="d-flex align-items-center mt-3">
                                        <button
                                                type="button"
                                                onClick={() => handleWishlistProduct(product) }
                                                className="btn btn-primary btn-sm ms-3"
                                            >
                                                <i className="bi bi-trash"></i> Move to Cart
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => props.deleteToWishAction(product.id)}
                                                className="btn btn-danger btn-sm ms-3"
                                            >
                                                <i className="bi bi-trash"></i> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.wishlistProduct.wishlist)
    return {
        wishlist: state.wishlistProduct.wishlist,
        cart: state.cartProduct.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addToCartAction : addToCartSaga,
      deleteToWishAction : deleteToWishlistSaga
    },dispatch);
  }


export default connect(mapStateToProps,mapDispatchToProps)(WishlistItem);

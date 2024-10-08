import React, { useEffect, useState } from "react";
import CartItem from "../container/CartItem";
import { connect } from "react-redux";
import Metapage from "../components/Layout/Metapage";
import { clearCartSaga } from "../store/Cart/cart.action";
import { bindActionCreators } from "redux";

function Cart(props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  useEffect(() => {
    let totalAmount = 0;
    let totalItems = 0;
    for (let i = 0; i < props.cart.length; i++) {
      let price = props.cart[i].price;
      let quantity = props.cart[i].quantity || 1;
      totalAmount += price * quantity;
      totalItems += quantity;
    }
    setTotalItems(totalItems);
    setTotalAmount(totalAmount);
  }, [props.cart]);

  const handleCheckout = () => {
    if(props.cart.length>0){
      props.clearCart();
      setIsCheckedOut(true);
    }
  };

  return (
    <>
      <Metapage title={"My Cart"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {isCheckedOut ? (
                <h2 className="text-center text-success">Your Order has been placed successfully! 🎉</h2>
              ) : props.cart.length === 0 ? (
                <h2 className="text-center text-muted">Your Cart is Empty!! 😞</h2>
              ) : (
                <CartItem />
              )}
            </div>

            <div className="col-lg-4">
              {!isCheckedOut && (
                <div className="card m-4">
                  <div className="card-header">
                    <h5 className="card-title">Cart Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between">
                        <span>Total Items </span>
                        <span>{totalItems}</span>
                      </li>
                      <li className="d-flex justify-content-between my-3">
                        <span>Delivery Charges</span>
                        <span className="text-success">Free</span>
                      </li>
                      <li className="d-flex justify-content-between border-top pt-3">
                        <strong>Total Amount</strong>
                        <strong>₹ {totalAmount}</strong>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mt-4"
                      onClick={handleCheckout}
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Metapage>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartProduct.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearCart : clearCartSaga,
  },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import React, { useEffect, useState } from "react";
import CartItem from "../container/CartItem";
import { connect } from "react-redux";

function Cart(props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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

  return (
    <>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-lg-8">
            {props.cart.length === 0 ? (
              <h2 className="text-center text-muted">Your Cart is Empty!! 😞</h2>
            ) : (
              <CartItem />
            )}
          </div>

          <div className="col-lg-4">
            <div className="card m-4">
              <div className="card-header">
                <h5 className="card-title">Price Details</h5>
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
                >
                  <i className="bi bi-cash"></i> Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartProduct.cart,
  };
};

export default connect(mapStateToProps)(Cart);

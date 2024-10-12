import React from "react";
import { connect, useDispatch } from "react-redux";
import { decrementQuantity, deleteToCartSaga, incrementQuantity } from "../store/Cart/CartAction.js";

function CartItem(props) {
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          {props.cart.map((product) => (
            <div key={product.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="img-fluid rounded-start m-3"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body m-4">
                    <h5 className="card-title text-bold mb-3 fs-3">{product.title}</h5>
                    <p className="card-text mb-2 fs-5">
                      <small className="text-muted">
                      </small>
                      &nbsp;&nbsp;
                      <span className="text-success">₹{product.price}</span>
                      &nbsp;&nbsp;
                    </p>
                    <div className="d-flex align-items-center mt-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control mx-1"
                        style={{ width: "50px", textAlign: "center" }}
                        // defaultValue={1}
                        value={product.quantity || 1} 
                        readOnly
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => dispatch(deleteToCartSaga(product.id))}
                        className="btn btn-outline-danger btn-sm ms-3"
                      >
                        <i className="bi bi-trash-fill"></i> Remove
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
  return {
    cart: state.cartProduct.cart,
  };
};

export default connect(mapStateToProps)(CartItem);

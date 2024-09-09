// Cart.jsx
import React from 'react';
import ProductCard from '../container/ProductCard';
import Layout from '../components/Layout/Layout';
import Metapage from '../components/Layout/Metapage';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Cart = ({ cart }) => {
    // console.log('Cart contents:', cart);  
    
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


const mapStateToProps = (state) => {
    return {
       cart: state.cart
    };
  };
  
/*   const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        incrementAction: incrementSagaCount,
      },
      dispatch
    );
  }; */
  
  export default connect(mapStateToProps)(Cart);
  






/* 
// Cart.jsx
import React from 'react';
import ProductCard from '../container/ProductCard';
import Layout from '../components/Layout/Layout';
import Metapage from '../components/Layout/Metapage';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Cart = ({ cart }) => {
    console.log('Cart contents:', cart);  
    
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


*/
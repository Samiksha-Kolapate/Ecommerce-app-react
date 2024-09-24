import React from 'react'
import Layout from '../components/Layout/Layout'
import ProductCard from '../container/ProductCard'
import Metapage from '../components/Layout/Metapage'
import { connect } from "react-redux";


const Wishlist = ({ props }) => {
    return (
        <>
            <Metapage title={"My Wishlist"}>

                <div className="container mt-4">
                    <h2>Your Wishlist</h2>
                    <div className="d-flex flex-wrap">
                        {props.wishlist.length > 0 ? (
                           props. wishlist.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        ) : (
                            <p>Your wishlist is empty</p>
                        )}
                    </div>
                </div>
            </Metapage>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
       wishlist: state.wishlistProduct.wishlist
    };
  };
  

  export default connect(mapStateToProps)(Wishlist);
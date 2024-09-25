import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import '../styles/Product.css'
import Metapage from "../components/Layout/Metapage";
import ProductCard from "../container/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";
import { sagaProductList } from "../store/Products/product.action.js"



const Productlist = (props) => {

useEffect(() => {
    props.productApiAction();
}, []);


return (
    <>
        <Metapage title="Home - eShopping">
            <div className="container-fluid row mt-3 home-page">
                <div className="col-md-12 ">
                    <h1 className="text-center">All Products</h1>
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            props.productListData?.map((product, index) => {
                                return (
                                    <ProductCard
                                          key={`${product.id}-${index}`}
                                         product={product} 
                                        isAuthenticated={props.isAuthenticated}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </ Metapage>

    </>
)
}



const mapStateToProps = (state) => {
    return {
        productListData: state.products.ListOfItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            productApiAction: sagaProductList,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);


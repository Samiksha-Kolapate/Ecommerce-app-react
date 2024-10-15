import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import '../Styles/Product.css'
import Metapage from "../Components/common/Metapage";
import ProductCard from "../Container/ProductCard.jsx";
import { sagaProductList } from "../Store/Products/productAction.js"
import { Category } from "../Components/Category.jsx";
import {  FaChevronDown } from "react-icons/fa";

const Home = (props) => {
    const [pagination, setPagination] = useState(10);
    
    const handlePagination = () => {
        if(pagination == 30){
            return setPagination(0);
        }
        setPagination(pagination+10);
    };

    useEffect(() => {
        props.productApiAction(pagination);
    }, [pagination]);

    return (
        <>
            <Metapage title="Home - eShopping">
                <div className="container-fluid row mt-2 home-page">
                    <div className="col-md-2 mx-3 ">
                        <Category />
                    </div>

                    <div className="col-md-9 mx-4 justify-content-center">
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
                        <div className="d-flex justify-content-center">
                            <li 
                            className=" d-flex align-item-center h4 text-success cursor-pointer bottom-0"
                            onClick={handlePagination}
                            >Load more  <i className="mx-2"><FaChevronDown /></i> </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);


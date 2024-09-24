import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import '../styles/Product.css'
import Metapage from "../components/Layout/Metapage";
import ProductCard from "../container/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";
import { sagaProductList } from "../store/Products/product.action.js"



// const Productlist = ({ cart, setCart, wishlist, setWishlist, isAuthenticated, handleLoginRedirect }) => {
const Productlist = (props) => {
/* const [products, setProducts] = useState([]);

const getAllProducts = async () =>{
    try{
        // const {data} = await axios.get('https://api.escuelajs.co/api/v1/products');
        const {data} = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);  // not getting image  sliced first elt
    }
    catch(error){
        toast.error("something went wrong")
    }
};

// get category as well at a time 
useEffect(() => {
    getAllProducts();
 }, []); */

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
                                        /* setCart = {setCart}
                                         setWishlist= {setWishlist} */
                                        isAuthenticated={props.isAuthenticated}
                                        // data={post}
                                        handleLoginRedirect={props.handleLoginRedirect}
                                        // wishlist={wishlist}
                                        // cart={cart}
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
    // console.log(state.products.ListOfItems);
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


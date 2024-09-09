import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import '../styles/Product.css'
import Metapage from "../components/Layout/Metapage";
import ProductCard from "../container/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";



const Productlist = ({ cart, setCart, wishlist, setWishlist, isAuthenticated, handleLoginRedirect }) => {
    const [products, setProducts] = useState([]);

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
     }, []);


    return (
        <>
            <Metapage title="Home - eShopping">
                <div className="container-fluid row mt-3 home-page">
                    <div className="col-md-12 ">
                        <h1 className="text-center">All Products</h1>
                        <div className="d-flex flex-wrap justify-content-center">
                            {
                                products?.map((product, index) => {
                                    return (
                                        <ProductCard 
                                            key={`${product.id}-${index}`}
                                            product={product} 
                                            setCart = {setCart}
                                            setWishlist= {setWishlist}
                                            isAuthenticated = {isAuthenticated}
                                            handleLoginRedirect = {handleLoginRedirect}
                                            wishlist={wishlist} 
                                            cart={cart}
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


export default Productlist;


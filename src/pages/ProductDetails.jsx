import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ProductDetailsCard from "../Container/ProductDetailsCard";
import { API_ENDPOINTS } from "../Shared/config";

const ProductDetails = (props) => {

    const { productId } = useParams();
    const [productData, setProductData] = useState({});

    const getSingleProduct = async () => {
        try {
            // const response  = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            const response = await axios.get(API_ENDPOINTS.productApi + productId )
            console.log(response)
            setProductData(response.data);
        }
        catch (error) {
            toast.error("Failed to load product details")   
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [productId]);

    
    useEffect(() => { }, [productData]);

    return (
        <>
            <ProductDetailsCard
                productData={productData}
                isAuthenticated={props.isAuthenticated}
                setIsAuthenticated={props.setIsAuthenticated}
            />
        </>
    );
};

export default ProductDetails;



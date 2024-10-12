import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ProductDetailsCard from "../container/ProductDetailsCard";

const ProductDetails = (props) => {

    const { productId } = useParams();
    const [productData, setProductData] = useState({});

    const getSingleProduct = async () => {
        try {
            // const response  = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
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

    /*   
       if (!productData) {
           return <div>Loading...</div>;
       }
    */
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



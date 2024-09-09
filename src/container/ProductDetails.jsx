import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Metapage from "../components/Layout/Metapage";
import ProductCard from '../container/ProductCard';
import { FaHeart } from 'react-icons/fa';



const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            // const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
            setProduct(data);
        }
        catch (error) {
            toast.error("Failed to load product details")
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [productId]);

    /*   useEffect(() => {
          const getSingleProduct = async () => {
              try {
                  const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                  // const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
                  setProduct(data);
              } catch (error) {
                  toast.error("Failed to load product details.");
              }
          };
  
          getSingleProduct();
      }, [productId]); */

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Metapage title={"product-details"}>
                <div className="container mt-4 position-relative">
                    <div className="d-flex flex-wrap">
                        <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.title}
                        />

                        <div className="wishlist-icon position-absolute top-0 end-0 m-2 p-3">
                            {/* <FaHeart
                                // onClick={handleWishlistClick}
                                style={{ color: isInWishlist ? 'red' : 'black', cursor: 'pointer' }}
                            /> */}
                        </div>

                        <div className="card-name-price">
                            <h5 className="card-title">{product.title}</h5>
                            <h5 className="card-title card-price">
                                {product.price.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                })}
                            </h5>
                        </div>

                        <div>
                            <p className="card-text mb-2">
                                {product.description}
                            </p>
                        </div>

                        <div className="card-name-price">
                            <button
                                className="btn btn-dark ms-1"
                                onClick={() => {
                                    // handleAddToCart(product);
                                }}
                            >
                                Add to cart
                            </button>
                        </div>



                        {/* <ProductCard product={product} /> */}

                    </div>
                </div>
            </Metapage>
        </>



    );
};

export default ProductDetail;

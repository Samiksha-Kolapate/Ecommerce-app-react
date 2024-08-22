import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import toast from "react-hot-toast";
import Metapage from "../components/Layout/Metapage";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
            setProduct(data);
        }
        catch (error) {
            toast.error("Failed to load product details")
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [productId]);

    return (
        <>
            <Metapage title={"product-details"}>
                <div className="container mt-4">
                    <div className="d-flex flex-wrap">
                        <h1>{product.title}</h1>
                        <img src={product.images} alt={product.title} />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </Metapage>
        </>
    )
}

export default ProductDetails;
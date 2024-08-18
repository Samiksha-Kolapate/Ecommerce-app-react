import React, { useState, useEffect } from "react";
import '../styles/Product.css'
import Metapage from "../components/Layout/Metapage";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";
// import { toast } from 'react-toastify';



const Product = ({ cart, setCart, wishlist, setWishlist, isAuthenticated, handleLoginRedirect }) => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () =>{
        try{
            const {data} = await axios.get('https://api.escuelajs.co/api/v1/products');
            setProducts(data.slice(1));  // not getting image  sliced first elt
        }
        catch(error){
            toast.error("something went wrong")
        }
    };

    
    useEffect(() => {
        getAllProducts();
     }, []);

    const handleAddToCart = (product) => {
        if (!isAuthenticated) {
            handleLoginRedirect();
            return;
        }

        setCart(prevCart => {

            const isProductInCart = prevCart.some(cartItem => product.id === cartItem.id);

            if (isProductInCart) {
                toast.error(product.title + "Product already in cart");
                return prevCart;
            }
            else {
                const updatedCart = [...prevCart, product];
                return updatedCart;
            }
        });
        // setCart([...cart,product]);    // was not updating cart as per present click ;;; giving output one step back
    }

    const handleAddToWishlist = (product) => {
        if (!isAuthenticated) {
            handleLoginRedirect();
            return;
        }

        setWishlist(prevWishlist => {
            const isProductInWishlist = prevWishlist.some(wishlistItem => product.id === wishlistItem.id);
            if (isProductInWishlist) {
                return prevWishlist.filter(wishlistItem => wishlistItem.id !== product.id);
            } else {
                return [...prevWishlist, product];
            }
        });
    };

    return (
        <>
            <Metapage title="Home - eShopping">
                <div className="container-fluid row mt-3 home-page">
                    <div className="col-md-12 ">
                        <h1 className="text-center">All Products</h1>
                        <div className="d-flex flex-wrap">
                            {
                                products?.map((product, index) => {
                                    return (
                                        <ProductCard 
                                            key={`${product.id}-${index}`}
                                            product={product} 
                                            handleAddToCart={handleAddToCart} 
                                            handleAddToWishlist={handleAddToWishlist} 
                                            wishlist={wishlist} 
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

export default Product



/* 
class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [

            ],
            cartCount: 0,
            cart: [],
            productList: []
        };

        this.getProducts = this.getProducts.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentDidMount() {
        console.log("Mounted");
        this.getProducts();
    }

    componentDidUpdate() {
        console.log("Updated")
    }


    getProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
            });
    }

    handleAddToCart() {
        const { cartCount } = this.state;
        this.setState({ cartCount: cartCount + 1 })
        this.setState({ cart })
    }


    render() {
        const { products, cartCount } = this.state;
        


        return (
            <>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link to="/" className="navbar-brand" href="#">
                                <img src={logo} style={{ width: '50px', height: '50px' }} />
                                e-Shopping
                            </Link>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/wishlist" className="nav-link">< FaHeart /> </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/cart" className="nav-link position-relative"> <PiShoppingCartBold style={{ fontSize: '24px' }} />
                                        {cartCount > 0 && (
                                            <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info">{cartCount}</span>
                                        )}
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                <div>
                    <div className="container-fluid row mt-3 home-page">
                        <div className="col-md-12 ">
                            <h1 className="text-center">All Products</h1>
                            <div className="d-flex flex-wrap">
                                {
                                    products.map((product, index) => {
                                        return (

                                            <div className="card m-2 p-3" key={`${product.title} ${index}`}>
                                                <img
                                                    src={product.image}
                                                    className="card-img-top"
                                                    alt={product.title}
                                                />
                                                <div className="card-body">
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
                                                            {product.description.substring(0, 100)}
                                                        </p>
                                                    </div>

                                                    <div className="card-name-price">
                                                        <button
                                                            className="btn btn-info ms-1"
                                                        >
                                                            More Details
                                                        </button>
                                                        <button
                                                            className="btn btn-dark ms-1"
                                                            onClick={this.handleAddToCart}>
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Product;


 */
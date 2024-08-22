import React, { Suspense } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Spinner from "./components/Spinner";
const Product = React.lazy(() => import("./pages/Product"));
const ProductDetails = React.lazy(() => import("./container/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Toast = React.lazy(() => import("./utils/Toast"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Signup = React.lazy(() => import("./pages/Auth/Signup"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));
const toast = React.lazy(() => import("react-hot-toast"));



function App() {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    console.log(isAuthenticated);
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        // toast.error("You must be logged in to perform this action");
        navigate('/login');
    };


    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Toast />
                {

                    isAuthenticated
                        ? (

                            <Routes>

                                <Route path="/" element={<Layout cart={cart}
                                    wishlist={wishlist}
                                    setWishlist={setWishlist}
                                    isAuthenticated={isAuthenticated}
                                    setIsAuthenticated={setIsAuthenticated}
                                />}>
                                    <Route index element={
                                        <Product
                                            cart={cart}
                                            setCart={setCart}
                                            wishlist={wishlist}
                                            setWishlist={setWishlist}
                                            isAuthenticated={isAuthenticated}
                                            handleLoginRedirect={handleLoginRedirect}
                                        />
                                    } />
                                    <Route path="product/:productId" element={<ProductDetails />} />
                                    <Route path="/cart" element={<Cart cart={cart} />} />
                                    <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
                                </Route>
                                {/* <Route path="*" element={<Login />} /> */}
                            </Routes>
                        ) : (
                            <Routes>
                                <Route path="/" element={<Layout cart={cart}
                                    wishlist={wishlist}
                                    setWishlist={setWishlist}
                                    isAuthenticated={isAuthenticated}
                                    setIsAuthenticated={setIsAuthenticated}
                                />}>
                                    <Route index element={
                                        <Product
                                            cart={cart}
                                            setCart={setCart}
                                            wishlist={wishlist}
                                            setWishlist={setWishlist}
                                            isAuthenticated={isAuthenticated}
                                            handleLoginRedirect={handleLoginRedirect}
                                        />
                                    } />
                                    <Route path="product/:productId" element={<ProductDetails />} />
                                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                                    <Route path="/signup" element={<Signup />} />
                                </Route>
                                {/* <Route path="*" element={<Login />} /> */}


                            </Routes>
                        )
                }
            </Suspense>
        </>
    );
}

export default App;

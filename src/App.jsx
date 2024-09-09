import React, { Suspense } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Spinner from "./components/Spinner";
import PrivateRoute from "./routes/PrivateRoute";
import Counter from "./components/Counter";
const Productlist = React.lazy(() => import("./pages/Productlist"));
const ProductDetails = React.lazy(() => import("./container/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Toast = React.lazy(() => import("./components/Toast"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Signup = React.lazy(() => import("./pages/Auth/Signup"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));



function App() {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    // console.log(isAuthenticated);
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        // toast.error("You must be logged in to perform this action");
        navigate('/login');
    };


    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Toast />

                <Routes>
                    <Route path="/" element={<Layout cart={cart}
                        wishlist={wishlist}
                        setWishlist={setWishlist}
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                    />}>
                        <Route index element={
                            <Productlist
                                cart={cart}
                                setCart={setCart}
                                wishlist={wishlist}
                                setWishlist={setWishlist}
                                isAuthenticated={isAuthenticated}
                                handleLoginRedirect={handleLoginRedirect}
                            />
                        } />
                        <Route path="/login" element={
                            <PrivateRoute>
                                <Login setIsAuthenticated={setIsAuthenticated} />
                            </PrivateRoute>
                        } />
                        <Route path="/signup" element={
                            <PrivateRoute>
                                <Signup />
                            </PrivateRoute>
                        } />
                        <Route path="product/:productId" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart cart={cart} />} />
                        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
                        {/* <Route path="/counter" element={<Counter />} /> */}

                    </Route>
                    {/* <Route path="*" element={<Login />} /> */}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;

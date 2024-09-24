import React, { Suspense } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Spinner from "./components/Spinner";
import PrivateRoute from "./routes/PrivateRoute";
const Productlist = React.lazy(() => import("./pages/Productlist"));
const ProductDetails = React.lazy(() => import("./container/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Toast = React.lazy(() => import("./components/Toast"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Signup = React.lazy(() => import("./pages/Auth/Signup"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));



function App() {

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
                    <Route path="/" element={<Layout 
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated = {setIsAuthenticated}
                    />}>
                        <Route index element={
                            <Productlist
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
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;

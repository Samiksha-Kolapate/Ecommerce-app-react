import React, { Suspense } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Spinner from "./Components/common/Spinner";
import PrivateRoute from "./Routes/PrivateRoute";
import Pagenotfound from "./Pages/Pagenotfound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
const Home = React.lazy(() => import("./Pages/Home"));
const ProductDetails = React.lazy(() => import("./Pages/ProductDetails"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const Wishlist = React.lazy(() => import("./Pages/Wishlist"));
const Toast = React.lazy(() => import("./Components/common/Toast"));
const Login = React.lazy(() => import("./Pages/Auth/Login"));
const Signup = React.lazy(() => import("./Pages/Auth/Signup"));
const Layout = React.lazy(() => import("./Layout/Layout"));



function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Toast />

                <Routes>
                    <Route path="/" element={<Layout
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                    />}>
                        <Route index element={
                            <Home
                                isAuthenticated={isAuthenticated}
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
                        <Route path="product/:productId" element={<ProductDetails
                            isAuthenticated={isAuthenticated}
                            setIsAuthenticated={setIsAuthenticated}
                        />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/policy" element={<Policy />} />

                    </Route>
                    <Route path="/*" element={<Pagenotfound />} />

                </Routes>
            </Suspense>
        </>
    );
}

export default App;

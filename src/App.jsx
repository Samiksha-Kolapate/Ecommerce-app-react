import React, { Suspense } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Spinner from "./components/Spinner";
import PrivateRoute from "./routes/PrivateRoute";
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
const Productlist = React.lazy(() => import("./pages/Productlist"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Toast = React.lazy(() => import("./components/Toast"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Signup = React.lazy(() => import("./pages/Auth/Signup"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));



function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    
   
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
                        <Route path="/about" element = {<About/>} />
                        <Route path="/contact" element = {<Contact/>} />
                        <Route path="/policy" element={<Policy/>} />

                    </Route>
                    <Route path="/*" element = {<Pagenotfound />} />

                </Routes>
            </Suspense>
        </>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [cart, setCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        toast.error("You must be logged in to perform this action");
        navigate('/login');
    };


    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Layout cart={cart} 
                                                wishlist={wishlist} 
                                                setWishlist={setWishlist}
                                                isAuthenticated={isAuthenticated} />}>
                    <Route index element={
                        <Product 
                        cart={cart} 
                        setCart={setCart} 
                        wishlist= {wishlist} 
                        setWishlist={setWishlist}
                        isAuthenticated={isAuthenticated}
                        handleLoginRedirect={handleLoginRedirect}
                        />
                        } />
                    <Route path="/cart" element={<Cart cart={cart} />} />
                    <Route path="/wishlist" element={<Wishlist wishlist={wishlist}/>} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/signup" element={<Signup />}/>

                </Route>
                
            </Routes>
        </>
    );
}

export default App;

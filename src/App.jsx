import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useState } from "react";
import Wishlist from "./pages/Wishlist";

function App() {
    const [cart, setCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <Product 
                    cart={cart} 
                    setCart={setCart} 
                    wishlist= {wishlist} 
                    setWishlist={setWishlist} />
                    } />
                <Route path="/cart" element={<Cart cart={cart} />} />
                <Route path="/wishlist" element={<Wishlist wishlist={wishlist}/>} />
            </Routes>
        </>
    );
}

export default App;

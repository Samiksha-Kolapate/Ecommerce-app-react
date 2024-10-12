import { combineReducers } from "redux";
import wishlistReducer from "./Wishlist/WishlistReducer.js";
import productReducer from "./Products/ProductReducer.js"
import cartReducer from "./Cart/CartReducer.js"

const rootReducers = combineReducers({
    cartProduct : cartReducer,
    wishlistProduct : wishlistReducer,
    products : productReducer
});

export default rootReducers;

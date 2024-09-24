import { combineReducers } from "redux";
import cartReducer from "./Cart/cart.reducer.js";
import wishlistReducer from "./Wishlist/wishlist.reducer.js";
import productReducer from "./Products/product.reducer.js"

const rootReducers = combineReducers({
    // counter: counterReducer,
    cartProduct : cartReducer,
    wishlistProduct : wishlistReducer,
    products : productReducer
});

export default rootReducers;

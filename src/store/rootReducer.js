import { combineReducers } from "redux";
import wishlistReducer from "./Wishlist/wishlistReducer.js";
import productReducer from "./Products/productReducer.js"
import cartReducer from "./Cart/cartReducer.js"

const rootReducers = combineReducers({
    cartProduct : cartReducer,
    wishlistProduct : wishlistReducer,
    products : productReducer
});

export default rootReducers;

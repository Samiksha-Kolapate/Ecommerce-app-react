import { combineReducers } from "redux";
import counterReducer from './Counter/counter.reducer.js'
import cartReducer from "./Cart/cart.reducer.js";
import wishlistReducer from "./Wishlist/wishlist.reducer.js";


const rootReducers = combineReducers({
    // counter: counterReducer,
    cartProduct : cartReducer,
    wishlistProduct : wishlistReducer
});

export default rootReducers;

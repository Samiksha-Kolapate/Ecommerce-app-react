import { all } from "redux-saga/effects";

import { cartSagas, decrementQuantitySagas, deleteCartItemSaga, incrementQuantitySagas } from "./Cart/cart.saga";
import { deleteWishlistItemSaga, wishlistSagas } from "./Wishlist/wishlist.saga";
import { sagaProductList } from "./Products/product.saga"


function* rootSaga() {
    yield all([
        cartSagas(),
        deleteCartItemSaga(),
        incrementQuantitySagas(),
        decrementQuantitySagas(),
        wishlistSagas(),
        deleteWishlistItemSaga(),
        sagaProductList(),
    ]);
}

export default rootSaga;


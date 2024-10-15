import { all } from "redux-saga/effects";

import { cartSagas, clearCartSagas, decrementQuantitySagas, deleteCartItemSaga, incrementQuantitySagas } from "./Cart/cartSaga.js";
import { deleteWishlistItemSaga, wishlistSagas } from "./Wishlist/wishlistSaga.js";
import { categoryListSaga, sagaProductList, searchProductListSaga } from "./Products/productSaga.js"


function* rootSaga() {
    yield all([
        cartSagas(),
        deleteCartItemSaga(),
        incrementQuantitySagas(),
        decrementQuantitySagas(),
        clearCartSagas(),
        wishlistSagas(),
        deleteWishlistItemSaga(),
        sagaProductList(),
        searchProductListSaga(),
        categoryListSaga()
    ]);
}

export default rootSaga;


import { all } from "redux-saga/effects";

import { cartSagas, clearCartSagas, decrementQuantitySagas, deleteCartItemSaga, incrementQuantitySagas } from "./Cart/CartSaga.js";
import { deleteWishlistItemSaga, wishlistSagas } from "./Wishlist/WishlistSaga.js";
import { categoryListSaga, sagaProductList, searchProductListSaga } from "./Products/ProductSaga.js"


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


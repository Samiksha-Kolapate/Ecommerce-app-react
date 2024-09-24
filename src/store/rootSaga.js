import { all } from "redux-saga/effects";

import { cartSagas, decrementQuantitySagas, deleteItemSaga, incrementQuantitySagas } from "./Cart/cart.saga";
import { wishlistSagas } from "./Wishlist/wishlist.saga";
import { sagaProductList } from "./Products/product.saga"


function* rootSaga() {
    yield all([
        cartSagas(),
        deleteItemSaga(),
        incrementQuantitySagas(),
        decrementQuantitySagas(),
        wishlistSagas(),
        sagaProductList(),
    ]);
}

export default rootSaga;


import { all } from "redux-saga/effects";

import {counterSagas} from './Counter/counter.saga';
import { cartSagas } from "./Cart/cart.saga";
import { wishlistSagas } from "./Wishlist/wishlist.saga";

function* rootSaga() {
    yield all([
        counterSagas(),
        cartSagas(),
        wishlistSagas(),
    ]);
}

export default rootSaga;


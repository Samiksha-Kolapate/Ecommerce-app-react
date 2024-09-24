import { put, takeLatest } from "redux-saga/effects";

function* wishlistSaga(payload) {
  yield put({ type: "ADD_TO_WISHLIST", 
    payload: payload.payload });
}

export function* wishlistSagas() {
    yield takeLatest("ADD_TO_WISHLIST_SAGA", wishlistSaga);
}

function* deleteToWishlistSaga(payload){
  yield put({
    type: "DELETE_TO_WISHLIST",
    payload: payload.payload
  });
}


export function* deleteWishlistItemSaga(){
  yield takeLatest("DELETE_TO_WISHLIST_SAGA", deleteToWishlistSaga)
}

import { put, takeLatest } from "redux-saga/effects";

function* addToCartSaga(payload) {
  yield put({ 
    type: "ADD_TO_CART", 
    payload: payload.payload });
}

export function* cartSagas() {
    yield takeLatest("ADD_TO_CART_SAGA", addToCartSaga);
}

function* deleteToCartSaga(payload){
  yield put({
    type: "DELETE_TO_CART",
    payload: payload.payload
  });
}


export function* deleteCartItemSaga(){
  yield takeLatest("DELETE_TO_CART_SAGA", deleteToCartSaga)
}

function* incrementQuantitySaga(payload){
  yield put({
    type: "INCREMENT_QUANTITY",
    payload: payload.payload
  });
}


export function* incrementQuantitySagas(){
  yield takeLatest("INCREMENT_QUANTITY_SAGA", incrementQuantitySaga)
}


function* decrementQuantitySaga(payload){
  yield put({
    type: "DECREMENT_QUANTITY",
    payload: payload.payload
  });
}


export function* decrementQuantitySagas(){
  yield takeLatest("DECREMENT_QUANTITY_SAGA", decrementQuantitySaga)
}

function* clearCartSaga(payload){
  yield put ({
    type: "CLEAR_CART",
    // payload: payload.payload
  });
}


export function* clearCartSagas(){
  yield takeLatest("CLEAR_CART_SAGA", clearCartSaga)
}


























/* 
import { put, takeLatest } from "redux-saga/effects";
import { addToCart } from "./cart.action";

function* handleAddToCartSaga(action) {
    yield put(addToCart(action.payload));
}

export function* cartSagas() {
    yield takeLatest("ADD_TO_CART_SAGA", handleAddToCartSaga);
}

 */

/* 

import { put, select, takeEvery } from 'redux-saga/effects';
import { ADD_TO_CART, addToCartSuccess, addToCartFailure } from './cart.action';
import toast from 'react-hot-toast';

// Selector to get the current cart state
const selectCart = (state) => state.cartProduct.cart;

function* handleAddToCart(action) {
  try {
    const cart = yield select(selectCart);
    const isProductInCart = cart.some(cartItem => cartItem.id === action.payload.id);

    if (isProductInCart) {
      toast.error(action.payload.title + " is already in the cart");
    } else {
      yield put(addToCartSuccess(action.payload));
      toast.success(action.payload.title + " added to cart!!");
    }
  } catch (error) {
    yield put(addToCartFailure(error));
    toast.error("Failed to add to cart");
  }
}

export default function* cartSaga() {
  yield takeEvery(ADD_TO_CART, handleAddToCart);
}


 */
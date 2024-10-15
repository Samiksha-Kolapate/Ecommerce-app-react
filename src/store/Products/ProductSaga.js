import { call, put, takeLatest } from "redux-saga/effects";
import {productData,handleSearchApi,handleCategoryApi} from "./productApi.js";


function* productList(action) {
    const response = yield call(productData,action.payload)
    yield put ({
        type : "PRODUCT_LIST",
        payload : response
    })
}

export function* sagaProductList(){
    yield takeLatest ("SAGA_PRODUCT_LIST",productList)
}


function* searchProductList(action) {
    const response = yield call(handleSearchApi, action.payload)
    yield put ({
        type : "SEARCH_PRODUCT_LIST",
        payload : response
    })
}

export function* searchProductListSaga(){
    yield takeLatest ("SEARCH_PRODUCT_LIST_SAGA",searchProductList)
}

function* categoryList(action) {
    const response = yield call(handleCategoryApi, action.payload)
    yield put ({
        type: "CATEGORY_LIST",
        payload: response
    })
}

export function* categoryListSaga(){
    yield takeLatest ("CATEGORY_LIST_SAGA", categoryList)
}
import { call, put, takeLatest } from "redux-saga/effects";
import productData from "./productApi";


function* productList() {
    const data = yield call(productData)
    yield put ({
        type : "CALL_PRODUCT_LIST",
        payload : data.slice(0,20)
    })
}

export function* sagaProductList(){
    yield takeLatest ("SAGA_CALL_PRODUCT_LIST",productList)
}
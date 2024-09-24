const productList = (payload) => {
    return ({
        type : "CALL_PRODUCT_LIST",
        payload: payload
    })
}

const sagaProductList = (payload) => {
    return ({
        type : "SAGA_CALL_PRODUCT_LIST",
        payload: payload
    })
}

export {
    productList,
    sagaProductList
}
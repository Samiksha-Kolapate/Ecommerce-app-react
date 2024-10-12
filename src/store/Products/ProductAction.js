const productList = (payload) => {
    return ({
        type : "PRODUCT_LIST",
        payload: payload
    })
}

const sagaProductList = (payload) => {
    return ({
        type : "SAGA_PRODUCT_LIST",
        payload: payload
    })
}

const searchProductList = (payload) => {
    return ({
        type : "SEARCH_PRODUCT_LIST",
        payload: payload
    })
}

const searchProductListSaga = (payload) => {
    return ({
        type : "SEARCH_PRODUCT_LIST_SAGA",
        payload: payload
    })
}

const categoryListAction = (payload) => {
    return ({
        type: "CATEGORY_LIST",
        payload: payload
    })
}

const categoryListActionSaga = (payload) => {
    return ({
        type: "CATEGORY_LIST_SAGA",
        payload: payload
    })
}

export {
    productList,
    sagaProductList,
    searchProductList,
    searchProductListSaga,
    categoryListAction,
    categoryListActionSaga
}
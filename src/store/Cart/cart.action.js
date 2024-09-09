const addToCart = (product) => {
    return {
        type :  "ADD_TO_CART",
        payload: product,
    };
};

const addToCartSaga = (product) => {
    return {
        type: "ADD_TO_CART_SAGA",
        payload: product,
    }
}

export {
    addToCart,
    addToCartSaga
}

























/* 
const addToCart = (product) => {
    return {
        type :  "ADD_TO_CART",
        payload: product,
    };
};

const addToCartSaga = (product) => {
    return {
        type: "ADD_TO_CART_SAGA",
        payload: product,
    }
}

const addToCartSuccess = (product) => ({
    type: "ADD_TO_CART_SUCCESS",
    payload: product,
});

const addToCartFailure = (error) => ({
    type: "ADD_TO_CART_FAILURE",
    payload: error,
});

export {
    addToCart,
    addToCartSaga,
    addToCartSuccess,
    addToCartFailure
}


*/
const addToCart = (product) => {
    return {
        type :  "ADD_TO_CART",
        payload: {...product, quantity: 1},
    };
};

const addToCartSaga = (product) => {
    return {
        type: "ADD_TO_CART_SAGA",
        payload: product,
    }
}

const deleteToCart = (product) => {
    return {
        type: "DELETE_TO_CART",
        payload: product
    }
}

const deleteToCartSaga = (product) => {
    return {
        type: "DELETE_TO_CART_SAGA",
        payload: product
    }
}

const incrementQuantity = (product) => {
    return {
        type: "INCREMENT_QUANTITY",
        payload: product
    }
}

const incrementQuantitySaga = (product) => {
    return {
        type: "INCREMENT_QUANTITY_SAGA",
        payload: product
    }
}

const decrementQuantity = (product) => {
    return {
        type: "DECREMENT_QUANTITY",
        payload: product
    }
}

const decrementQuantitySaga = (product) => {
    return {
        type: "DECREMENT_QUANTITY_SAGA",
        payload: product
    }
}

const clearCart = () => {
    return {
        type: "CLEAR_CART",
        // payload: product
    }
}

const clearCartSaga = () => {
    return {
        type: "CLEAR_CART_SAGA",
        // payload: product
    }
}

export {
    addToCart,
    addToCartSaga,
    deleteToCart,
    deleteToCartSaga,
    incrementQuantity,
    incrementQuantitySaga,
    decrementQuantity,
    decrementQuantitySaga,
    clearCart,
    clearCartSaga
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
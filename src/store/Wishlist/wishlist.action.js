const addToWishlist = (product) => {
    return {
        type :  "ADD_TO_WISHLIST",
        payload: product,
    };
};

const addToWishlistSaga = (product) => {
    return {
        type: "ADD_TO_WISHLIST_SAGA",
        payload: product,
    }
}

export {
    addToWishlist,
    addToWishlistSaga
}
























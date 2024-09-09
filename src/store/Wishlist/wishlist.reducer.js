const initialState = {
    wishlist : [],
}

const wishlistReducer = (state = initialState,action) => {
    console.log(state.wishlist);

    switch(action.type){
        case "ADD_TO_WISHLIST" : 
            return {
                ...state,
                wishlist : [...state.wishlist, action.payload]
            }
        default :
            return state;
    }
}

export default wishlistReducer;
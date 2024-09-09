const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    console.log(state.cart);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        default:
            return state;
    }

}

export default cartReducer;
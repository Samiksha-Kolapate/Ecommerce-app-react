const initialState = {
    ListOfItems: [],
  };
  
  const productReducer = (state = initialState, action) => {
     
    switch (action.type) {
      case "CALL_PRODUCT_LIST": {
        
        return {
          ...state,
          ListOfItems: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  
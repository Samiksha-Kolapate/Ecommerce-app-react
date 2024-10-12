const initialState = {
    ListOfItems: [],
  };
  
  const productReducer = (state = initialState, action) => {
     
    switch (action.type) {
      case "PRODUCT_LIST": {
        
        return {
          ...state,
          ListOfItems: action.payload,
        };
      }

      case "SEARCH_PRODUCT_LIST": {
        
        return {
          ...state,
          ListOfItems: action.payload,
        };
      }

      case "CATEGORY_LIST": {
        return {
          ...state,
          ListOfItems: action.payload,
        }
      }
 
      default:
        return state;
    }
  };
  
  export default productReducer;
  
import axios from "axios";
import { API_ENDPOINTS } from "../../Shared/config";

export const productData = async (pagination) => {
    try {
      // const res = await axios.get("https://fakestoreapi.com/products");
     const response = await axios.get(API_ENDPOINTS.paginationApi + pagination);   
     return response.data
    } catch (error) {
      console.log(error);
    }
  };
  

export const handleSearchApi = async (searchQuery) => {
    try {
    //  const response = await axios.get("https://fakestoreapi.com/products/?title=" + searchQuery);
     const response = await axios.get(API_ENDPOINTS.searchQueryApi + searchQuery);
     return response.data
    } catch (error) {
      console.log(error);
    }
  };


export const handleCategoryApi = async (id) => {
  try {
    // const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    let response = await axios.get(`${API_ENDPOINTS.categoryApi+id}/products`)
    return response.data;
  }catch(error){
    console.log(error);
  }
};
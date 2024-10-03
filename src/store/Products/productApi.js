import axios from "axios";


export const productData = async () => {
    try {
      // const res = await axios.get("https://fakestoreapi.com/products");
     const res = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");
     return res.data
    } catch (error) {
      console.log(error);
    }
  };
  

export const handleSearchApi = async (searchQuery) => {
    try {
    //  const response = await axios.get("https://fakestoreapi.com/products/?title=" + searchQuery);
     const response = await axios.get("https://api.escuelajs.co/api/v1/products/?title=" + searchQuery);
     return response.data
    } catch (error) {
      console.log(error);
    }
  };


export const handleCategoryApi = async (id) => {
  try {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    return response.data;
  }catch(error){
    console.log(error);
  }
};
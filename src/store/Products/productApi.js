import axios from "axios";


const productData = async () => {
    try {
      // const res = await axios.get("https://fakestoreapi.com/products");
     const res = await axios.get("https://api.escuelajs.co/api/v1/products");
     return res.data
    } catch (error) {
      console.log(error);
    }
  };
  
  export default productData;
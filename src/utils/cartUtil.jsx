// import { toast } from "react-hot-toast";
// import { useDispatch } from 'react-redux';
// import { addToCartSaga } from '../store/Cart/cart.action';

// const handleCartLogic = (product, isAuthenticated, cart, dispatch, navigate) => {
//     if (isAuthenticated) {
//         let existProduct = cart.some(value => value.id === product.id);
//         if (existProduct) {
//             toast.error(product.title + " already in cart");
//         } else {
//             dispatch(addToCartSaga(product));
//             toast.success(product.title + " added to cart!");
//         }
//     } else {
//         toast.error("You have to login first");
//         navigate('/login');
//     }
// };

// export default handleCartLogic;


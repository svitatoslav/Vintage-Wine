// import { addOneToExistedProduct, updateCarts } from '../redux/reducers/cart-reducer';
// import axios from "axios";
// import {useDispatch} from "react-redux";
//
// export const handleAddToCart = async (e, cart, id, data, token) => {
//   // e.preventDefault();
//
//   const dispatch = useDispatch()
//
//   const itemInCart = cart?.find(({ instance }) => instance._id === id);
//   if (itemInCart) {
//     dispatch(addOneToExistedProduct(id));
//   } else {
//     dispatch(updateCarts([{ quantity: 1, instance: data }]));
//   }
//
//   if (token) {
//     axios.put(`http://127.0.0.1:4000/api/cart/${id}`, data, {
//       headers: {
//         Authorization: token,
//       },
//     })
//       .then((res) => console.log(res.statusText))
//       .catch((err) => console.log(err));
//   }
// };

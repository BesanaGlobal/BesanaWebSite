import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  SET_PRODUCT,
  REMOVE_TO_CART,
  UPDATE_PRODUCT_QUANTITY
} from "../types";

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const decreaseCart = (id, quantity) => ({ type: UPDATE_PRODUCT_QUANTITY, payload: id, quantity })

export const delFromCart = (id, all = false) =>
  
    all
    ? { type: REMOVE_ALL_FROM_CART , payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const setProductList = (productList) => ({
  type: SET_PRODUCT,
  payload: productList,
});



// export const updateProductQuantity = (productId, quantity) => {
//   return {
//     type: 'UPDATE_PRODUCT_QUANTITY',
//     payload: {
//       productId,
//       quantity
//     }
//   }
// }
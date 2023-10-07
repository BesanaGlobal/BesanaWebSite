import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  SET_PRODUCT,
} from "../types";

export const initialState = {
  products: [],
  cart: [],
};


export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT: {
      return { ...state, products: action.payload };
    }
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.idProd === action.payload
      );

      let itemInCart = state.cart.find((item) => item.idProd === newItem.idProd);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.idProd === newItem.idProd
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.idProd === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.idProd === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.idProd !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}

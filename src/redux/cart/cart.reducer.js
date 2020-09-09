import * as actionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  isCartDropdownVisible: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartDropdownVisible: !state.isCartDropdownVisible,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
      };
    default:
      return state;
  }
};

export default cartReducer;

import * as actionTypes from "./cart.types";
import { addItemToCart, decreaseItem } from "./cart.utils";

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
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.item.id),
      };
    case actionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.item),
      };

    default:
      return state;
  }
};

export default cartReducer;

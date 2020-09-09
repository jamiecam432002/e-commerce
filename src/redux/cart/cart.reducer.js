import * as actionTypes from "./cart.types";

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
        cartItems: [...state.cartItems, action.item],
      };
    default:
      return state;
  }
};

export default cartReducer;

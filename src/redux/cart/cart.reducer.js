import * as actionTypes from "./cart.types";

const initialState = {
  isCartDropdownVisible: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartDropdownVisible: !state.isCartDropdownVisible,
      };
    default:
      return state;
  }
};

export default cartReducer;

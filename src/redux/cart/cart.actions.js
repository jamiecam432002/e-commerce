import * as actionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: actionTypes.DECREASE_ITEM,
    item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: actionTypes.CLEAR_ITEM_FROM_CART,
    item,
  };
};

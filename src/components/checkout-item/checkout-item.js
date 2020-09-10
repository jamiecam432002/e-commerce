import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  decreaseItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  onRemoveItem,
  onDecreaseItem,
  onIncreaseItem,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => onDecreaseItem(item)}>
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => onIncreaseItem(item)}>
        &#10095;
      </div>
    </span>
    <span className="price">{item.price}</span>
    <div className="remove-button" onClick={() => onRemoveItem(item)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (item) => dispatch(clearItemFromCart(item)),
    onDecreaseItem: (item) => dispatch(decreaseItem(item)),
    onIncreaseItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);

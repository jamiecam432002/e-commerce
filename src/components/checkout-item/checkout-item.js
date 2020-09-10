import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, onRemoveItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">{item.quantity}</span>
    <span className="price">{item.price}</span>
    <div className="remove-button" onClick={() => onRemoveItem(item)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (item) => dispatch(clearItemFromCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, cartDropdownIsVisible }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartDropdownIsVisible ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { isCartDropdownVisible },
}) => {
  return {
    currentUser: currentUser,
    cartDropdownIsVisible: isCartDropdownVisible,
  };
};

export default connect(mapStateToProps)(Header);

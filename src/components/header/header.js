import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className={classes.Header}>
    <Link to="/" className={classes.LogoContainer}>
      <Logo className={classes.Logo} />
    </Link>
    <div className={classes.Options}>
      <Link className={classes.Option} to="/shop">
        SHOP
      </Link>
      <Link className={classes.Option} to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className={classes.Option} onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className={classes.Option} to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;

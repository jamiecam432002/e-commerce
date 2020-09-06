import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
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
    </div>
  </div>
);

export default Header;

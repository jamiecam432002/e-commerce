import React from "react";
import classes from "./collection-item.module.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className={classes.CollectionItem}>
    <div
      className={classes.Image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className={classes.CollectionFooter}>
      <span className={classes.Name}>{name}</span>
      <span className={classes.Price}>{price}</span>
    </div>
  </div>
);

export default CollectionItem;

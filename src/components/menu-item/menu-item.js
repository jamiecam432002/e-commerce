import React from "react";
import classes from "./menu-item.module.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  const classesArray = [classes.menuitem];
  if (size) {
    classesArray.push(classes.menuitemlarge);
  }
  return (
    <div className={classesArray.join(" ")}>
      <div
        className={classes.backgroundimage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className={classes.content}>
        <h1 className={classes.title}>{title.toUpperCase()}</h1>
        <span className={classes.subtitle}>SHOW NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

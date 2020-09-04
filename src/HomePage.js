import React from "react";
import classes from "./HomePage.module.scss";

const HomePage = () => (
  <div className={classes.homepage}>
    <div className={classes.directorymenu}>
      <div className={classes.menuitem}>
        <div className={classes.content}>
          <h1 className={classes.title}>HATS</h1>
          <span className={classes.subtitle}>SHOW NOW</span>
        </div>
      </div>
      <div className={classes.menuitem}>
        <div className={classes.content}>
          <h1 className={classes.title}>JACKETS</h1>
          <span className={classes.subtitle}>SHOW NOW</span>
        </div>
      </div>
      <div className={classes.menuitem}>
        <div className={classes.content}>
          <h1 className={classes.title}>SNEAKERS</h1>
          <span className={classes.subtitle}>SHOW NOW</span>
        </div>
      </div>
      <div className={classes.menuitem}>
        <div className={classes.content}>
          <h1 className={classes.title}>WOMENS</h1>
          <span className={classes.subtitle}>SHOW NOW</span>
        </div>
      </div>
      <div className={classes.menuitem}>
        <div className={classes.content}>
          <h1 className={classes.title}>MENS</h1>
          <span className={classes.subtitle}>SHOW NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

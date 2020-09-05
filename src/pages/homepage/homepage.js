import React from "react";
import Directory from "../../components/directory/directory";
import classes from "./homepage.module.scss";

const HomePage = (props) => (
  <div className={classes.homepage}>
    <Directory />
  </div>
);

export default HomePage;

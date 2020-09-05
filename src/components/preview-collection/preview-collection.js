import React from "react";
import classes from "./preview-collection.module.scss";
import CollectionItem from "../collection-item/collection-item";

const PreviewCollection = ({ title, items }) => (
  <div className={classes.CollectionPreview}>
    <h1 className={classes.Title}>{title.toUpperCase()}</h1>
    <div className={classes.Preview}>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...props }) => (
          <CollectionItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;

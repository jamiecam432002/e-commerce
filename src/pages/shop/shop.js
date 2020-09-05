import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection";
import classes from "./shop.module.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className={classes.ShopPage}>
        {collections.map(({ id, ...props }) => (
          <PreviewCollection key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

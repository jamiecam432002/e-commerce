import React from "react";
import { connect } from "react-redux";
import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

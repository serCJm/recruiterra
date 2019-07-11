import React from "react";
import classes from "./PlaceholderTitle.module.css";

const PlaceholderTitle = props => {
  return <h2 className={classes.title}>{props.children}</h2>;
};

export default PlaceholderTitle;

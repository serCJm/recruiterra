import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ onClick, isOpen }) => {
  let menuClass = isOpen ? classes.active : classes.menu;
  return (
    <div className={menuClass} onClick={onClick}>
      <div className={classes.bar} />
      <div className={classes.bar} />
      <div className={classes.bar} />
    </div>
  );
};

export default DrawerToggle;

import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = ({ isOpen, onClick }) =>
  isOpen ? <div className={classes.backdrop} onClick={onClick} /> : null;

export default Backdrop;

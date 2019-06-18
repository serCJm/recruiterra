import React from "react";
import classes from "./RegBtn.module.css";
import PropTypes from "prop-types";

const RegBtn = ({ children, type, btnStyle: style, onClick }) => {
  let btnStyle;
  if (style === "success") {
    btnStyle = classes.BtnSuccess;
  } else if (style === "danger") {
    btnStyle = classes.BtnDanger;
  } else {
    btnStyle = classes.BtnDark;
  }
  return (
    <button type={type || null} className={btnStyle} onClick={onClick || null}>
      {children}
    </button>
  );
};

RegBtn.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func
};

export default RegBtn;

import React from "react";
import classes from "./RegBtn.module.css";

const RegBtn = ({ children, type, btnStyle: style }) => {
  let btnStyle;
  if (style === "success") {
    btnStyle = classes.BtnSuccess;
  } else if (style === "danger") {
    btnStyle = classes.BtnDanger;
  } else {
    btnStyle = classes.BtnDark;
  }
  return (
    <button type={type || null} className={btnStyle}>
      {children}
    </button>
  );
};

export default RegBtn;

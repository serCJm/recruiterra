import React from "react";
import classes from "./StatusBtn.module.css";

const StatusBtn = ({ status }) => {
  return (
    <button className={status ? classes.active : classes.inactive}>
      {status ? "active" : "inactive"}
    </button>
  );
};

export default StatusBtn;

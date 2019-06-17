import React from "react";
import classes from "./DotsBtn.module.css";

const DotsBtn = () => {
  return (
    <button className={classes.btnOptins}>
      <span className={classes.circle} />
      <span className={classes.circle} />
      <span className={classes.circle} />
    </button>
  );
};

export default DotsBtn;

import React from "react";
import PropTypes from "prop-types";
import classes from "./DotsBtn.module.css";

const DotsBtn = ({ onClick }) => {
  return (
    <button className={classes.btnOptins} onClick={onClick}>
      <span className={classes.circle} />
      <span className={classes.circle} />
      <span className={classes.circle} />
    </button>
  );
};

DotsBtn.propTypes = {
  onClick: PropTypes.func
};

export default DotsBtn;

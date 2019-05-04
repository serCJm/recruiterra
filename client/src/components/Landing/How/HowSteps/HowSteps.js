import React from "react";
import PropTypes from "prop-types";
import classes from "./HowSteps.module.css";

const HowSteps = ({ contents, exitAnimation }) => {
  return (
    <>
      {contents.map((item, i) => (
        <div
          key={item.title}
          className={exitAnimation ? classes.wrapperExit : classes.wrapperIn}
        >
          <div className={classes.text}>
            <h3>
              <span className={classes.step}>{i + 1}</span>
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
          {item.image}
        </div>
      ))}
    </>
  );
};

HowSteps.propTypes = {
  exitAnimation: PropTypes.bool,
  contents: PropTypes.array
};

export default HowSteps;

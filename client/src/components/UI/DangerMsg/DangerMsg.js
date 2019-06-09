import React, { useState, useEffect } from "react";
import classes from "./DangerMsg.module.css";
import PropTypes from "prop-types";

const DangerMsg = ({ duration, onAnimDurationEnd, children }) => {
  const [isVisible, setVisible] = useState(false);
  const [sectionClass, setSectionClass] = useState(classes.container);

  let timer1;
  let timer2;

  useEffect(() => {
    if (children) {
      setVisible(true);
    }
    if (duration) {
      timer1 = setTimeout(() => {
        animate();
      }, duration);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [children]);

  function animate() {
    if (onAnimDurationEnd) {
      timer2 = setSectionClass(classes.containerAnimated);
      setTimeout(() => {
        setVisible(false);
      }, 300);
    } else {
      setVisible(false);
    }
  }

  return (
    <>
      {isVisible ? (
        <section className={sectionClass}>
          <div className={classes.inner}>
            {children}
            <button className={classes.btn} onClick={() => animate()}>
              &times;
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
};

DangerMsg.propTypes = {
  duration: PropTypes.number,
  onAnimDurationEnd: PropTypes.bool,
  children: PropTypes.node
};

export default DangerMsg;

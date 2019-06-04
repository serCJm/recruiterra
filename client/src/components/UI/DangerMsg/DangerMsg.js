import React, { useState, useEffect } from "react";
import classes from "./DangerMsg.module.css";

const DangerMsg = ({ duration, onAnimDurationEnd, children }) => {
  const [isVisible, setVisible] = useState(false);
  const [sectionClass, setSectionClass] = useState(classes.container);

  useEffect(() => {
    if (children) {
      setVisible(true);
    }
  }, [children]);

  function animate() {
    if (onAnimDurationEnd) {
      setSectionClass(classes.containerAnimated);
      setTimeout(() => {
        setVisible(false);
      }, 300);
    } else {
      setVisible(false);
    }
  }

  if (duration) {
    setTimeout(() => {
      animate();
    }, duration);
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

export default DangerMsg;

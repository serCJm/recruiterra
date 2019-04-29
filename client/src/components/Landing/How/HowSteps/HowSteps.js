import React from "react";
import classes from "./HowSteps.module.css";

const HowSteps = ({ contents }) => {
  return (
    <section className={classes.container}>
      {contents.map((item, i) => (
        <div key={item.title} className={classes.wrapper}>
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
    </section>
  );
};

export default HowSteps;

import React from "react";
import classes from "./ResumeField.module.css";

const ResumeField = ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <div className={classes.inputContainer}>
        {!/summary|education|experience/.test(input.name) ? (
          <input {...input} className={classes.input} placeholder={label} />
        ) : (
          <textarea
            {...input}
            className={classes.textarea}
            placeholder={label}
          />
        )}
        <label className={classes.label}>{label}</label>
        <div className={classes.error}>{touched && error}</div>
      </div>
    </>
  );
};

export default ResumeField;

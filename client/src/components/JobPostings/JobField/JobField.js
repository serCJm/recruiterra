import React from "react";
import classes from "./JobField.module.css";

const JobField = ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <div className={classes.inputContainer}>
        {input.name !== "description" ? (
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

export default JobField;

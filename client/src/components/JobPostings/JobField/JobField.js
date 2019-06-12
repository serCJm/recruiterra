import React from "react";
import classes from "./JobField.module.css";

const JobField = ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <p className={classes.inputContainer}>
        <input {...input} className={classes.input} placeholder={label} />
        <label className={classes.label}>{label}</label>
        <div className={classes.error}>{touched && error}</div>
      </p>
    </>
  );
};

export default JobField;

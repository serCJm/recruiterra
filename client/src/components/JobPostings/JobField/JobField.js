import React from "react";

const JobField = ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <label>{label}</label>
      <input {...input} />
      <div>{touched && error}</div>
    </>
  );
};

export default JobField;

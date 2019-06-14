import React from "react";
import classes from "./JobPostForm.module.css";
import { reduxForm, Field } from "redux-form";
import JobField from "../JobField/JobField";
import { Link } from "react-router-dom";
//import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

const JobPostForm = props => {
  function renderFields() {
    return formFields.map(({ name, label }) => (
      <Field
        key={name}
        component={JobField}
        type="text"
        name={name}
        label={label}
      />
    ));
  }
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onJobPostSubmit)}>
        {renderFields()}
        <div className={classes.btnContainer}>
          <Link to="/job-postings">
            <RegBtn btnStyle="danger">Cancel</RegBtn>
          </Link>
          <RegBtn btnStyle="success" type="submit">
            Next
          </RegBtn>
        </div>
      </form>
    </>
  );
};

function validate(values) {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name.replace(/s+$/, "")}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "jobForm",
  destroyOnUnmount: false
})(JobPostForm);

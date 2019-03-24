import React from "react";
import { reduxForm, Field } from "redux-form";
import JobField from "../JobField/JobField";
import { Link } from "react-router-dom";
import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";

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
    <form onSubmit={props.handleSubmit(props.onJobPostSubmit)}>
      {renderFields()}
      <Link to="/job-postings">Cancel</Link>
      <button type="submit">Next</button>
    </form>
  );
};

function validate(values) {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "jobForm",
  destroyOnUnmount: false
})(JobPostForm);

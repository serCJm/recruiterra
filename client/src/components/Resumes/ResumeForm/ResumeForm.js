import React from "react";
import classes from "./ResumeForm.module.css";
import { reduxForm, Field } from "redux-form";
import ResumeField from "../ResumeField/ResumeField";
import { Link } from "react-router-dom";
//import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

const ResumeForm = props => {
  function renderFields() {
    return formFields.map(({ name, label }) => (
      <Field
        key={name}
        component={ResumeField}
        type="text"
        name={name}
        label={label}
      />
    ));
  }
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onResumePostSubmit)}>
        {renderFields()}
        <div className={classes.btnContainer}>
          <Link to="/my-resumes">
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
  form: "resumeForm",
  destroyOnUnmount: false
})(ResumeForm);

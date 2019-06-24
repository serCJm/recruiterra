import React from "react";
import classes from "../JobPostForm/JobPostForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import JobField from "../JobField/JobField";
import { Link } from "react-router-dom";
//import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";
import { updateJobPost } from "../../../store/actions";

// NOTE: there's a bug because if page gets reloaded on this component
// state will be lost causing error in mapStateToProps
// TODO: save edited job into local storage
const JobPostUpdate = props => {
  async function handleJobPostUpdate(formValues) {
    await props.updateJobPost(formValues, props.currentJobId);
    props.history.push("/job-postings");
  }
  function renderFields() {
    return formFields.map(({ name, label }) => {
      return (
        <Field
          key={name}
          component={JobField}
          type="text"
          name={name}
          label={label}
        />
      );
    });
  }
  return (
    <section className={classes.formContainer}>
      <form onSubmit={props.handleSubmit(handleJobPostUpdate)}>
        {renderFields()}
        <div className={classes.btnContainer}>
          <Link to="/job-postings">
            <RegBtn btnStyle="danger">Cancel</RegBtn>
          </Link>
          <RegBtn btnStyle="success" type="submit">
            Update
          </RegBtn>
        </div>
      </form>
    </section>
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

const mapStateToProps = ({ jobs }) => {
  const job = jobs.jobsList.filter(job => job._id === jobs.currentJobId);
  const values = {
    name: job[0].name,
    title: job[0].title,
    description: job[0].description,
    skills: job[0].skills.join(", "),
    tags: job[0].tags.join(", ")
  };
  return {
    initialValues: values,
    currentJobId: jobs.currentJobId
  };
};

export default connect(
  mapStateToProps,
  { updateJobPost }
)(
  reduxForm({
    validate,
    form: "jobFormUpdate",
    destroyOnUnmount: true
  })(JobPostUpdate)
);

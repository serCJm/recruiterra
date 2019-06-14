import React from "react";
import classes from "./JobPostReview.module.css";
import { connect } from "react-redux";
import formFields from "../formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

const JobPostReview = ({ onCancel, formValues, submitJobPost, history }) => {
  function renderPostReview() {
    return formFields.map(({ label, name }) => (
      <div key={name}>
        <h4 className={classes.label}>{label}:</h4>
        <p>{formValues[name]}</p>
      </div>
    ));
  }

  async function handleSubmitJobPost(e) {
    e.preventDefault();
    await submitJobPost(formValues);
    history.push("/job-postings");
  }

  return (
    <div className={classes.container}>
      {renderPostReview()}
      <div className={classes.btnContainer}>
        <RegBtn btnStyle="danger" onClick={onCancel}>
          Back
        </RegBtn>
        <RegBtn btnStyle="success" onClick={handleSubmitJobPost}>
          Post Job
        </RegBtn>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    formValues: state.form.jobForm.values
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(JobPostReview)
);

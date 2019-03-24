import React from "react";
import { connect } from "react-redux";
import formFields from "../formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions";

const JobPostReview = ({ onCancel, formValues, submitJobPost, history }) => {
  function renderPostReview() {
    return formFields.map(({ label, name }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ));
  }

  async function handleSubmitJobPost(e) {
    e.preventDefault();
    await submitJobPost(formValues);
    history.push("/job-postings");
  }

  return (
    <div>
      <h5>Please review your job post</h5>
      {renderPostReview()}
      <button onClick={onCancel}>Back</button>
      <button onClick={handleSubmitJobPost}>Post Job</button>
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

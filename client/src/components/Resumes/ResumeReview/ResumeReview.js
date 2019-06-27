import React from "react";
import classes from "./ResumeReview.module.css";
import { connect } from "react-redux";
import formFields from "../formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

const ResumeReview = ({ onCancel, formValues, submitResumePost, history }) => {
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
    await submitResumePost(formValues);
    history.push("/my-resumes");
  }

  return (
    <div className={classes.container}>
      {renderPostReview()}
      <div className={classes.btnContainer}>
        <RegBtn btnStyle="danger" onClick={onCancel}>
          Back
        </RegBtn>
        <RegBtn btnStyle="success" onClick={handleSubmitJobPost}>
          Post Resume
        </RegBtn>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.resumeForm.values
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(ResumeReview)
);

import React, { useState } from "react";
import classes from "./ResumeNew.module.css";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import ResumeForm from "../ResumeForm/ResumeForm";
import ResumeReview from "../ResumeReview/ResumeReview";

const ResumeNew = () => {
  const [showResumeReview, setResumeReview] = useState(false);

  function renderContent() {
    if (showResumeReview) {
      return (
        <>
          <h2 className={classes.title}>Please review your resume</h2>
          <ResumeReview
            onCancel={() =>
              setResumeReview(prevShowJobPostReview => !prevShowJobPostReview)
            }
          />
        </>
      );
    }
    return (
      <>
        <h2 className={classes.title}>
          Please Enter Your Resume Information Below
        </h2>
        <ResumeForm
          onResumePostSubmit={() =>
            setResumeReview(prevShowJobPostReview => !prevShowJobPostReview)
          }
        />
      </>
    );
  }

  return <section className={classes.formContainer}>{renderContent()}</section>;
};

export default withRouter(reduxForm({ form: "resumeForm" })(ResumeNew));

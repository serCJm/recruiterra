import React, { useState } from "react";
import classes from "./ResumeNew.module.css";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import ResumeForm from "../ResumeForm/ResumeForm";
import ResumeReview from "../ResumeReview/ResumeReview";
import PlaceholderTitle from "../../UI/PlaceholderTitle/PlaceholderTitle";

const ResumeNew = () => {
  const [showResumeReview, setResumeReview] = useState(false);

  function renderContent() {
    if (showResumeReview) {
      return (
        <>
          <PlaceholderTitle>Please review your resume</PlaceholderTitle>
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
        <PlaceholderTitle>
          Please Enter Your Resume Information Below
        </PlaceholderTitle>
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

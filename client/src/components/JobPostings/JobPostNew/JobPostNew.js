import React, { useState } from "react";
import classes from "./JobPostNew.module.css";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import JobPostForm from "../JobPostForm/JobPostForm";
import JobPostReview from "../JobPostReview/JobPostReview";
import PlaceholderTitle from "../../UI/PlaceholderTitle/PlaceholderTitle";

const JobPostNew = () => {
  const [showJobPostReview, setJobPostReview] = useState(false);

  function renderContent() {
    if (showJobPostReview) {
      return (
        <>
          <PlaceholderTitle>Please review your job post</PlaceholderTitle>
          <JobPostReview
            onCancel={() =>
              setJobPostReview(prevShowJobPostReview => !prevShowJobPostReview)
            }
          />
        </>
      );
    }
    return (
      <>
        <PlaceholderTitle>
          Please Enter Your Job Post Information Below
        </PlaceholderTitle>
        <JobPostForm
          onJobPostSubmit={() =>
            setJobPostReview(prevShowJobPostReview => !prevShowJobPostReview)
          }
        />
      </>
    );
  }

  return <section className={classes.formContainer}>{renderContent()}</section>;
};

export default withRouter(reduxForm({ form: "jobForm" })(JobPostNew));

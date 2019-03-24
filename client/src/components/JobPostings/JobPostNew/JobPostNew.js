import React, { useState } from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import JobPostForm from "../JobPostForm/JobPostForm";
import JobPostReview from "../JobPostReview/JobPostReview";

const JobPostNew = () => {
  const [showJobPostReview, setJobPostReview] = useState(false);

  function renderContent() {
    if (showJobPostReview) {
      return (
        <JobPostReview
          onCancel={() =>
            setJobPostReview(prevShowJobPostReview => !prevShowJobPostReview)
          }
        />
      );
    }
    return (
      <JobPostForm
        onJobPostSubmit={() =>
          setJobPostReview(prevShowJobPostReview => !prevShowJobPostReview)
        }
      />
    );
  }

  return <div>{renderContent()}</div>;
};

export default withRouter(reduxForm({ form: "jobForm" })(JobPostNew));

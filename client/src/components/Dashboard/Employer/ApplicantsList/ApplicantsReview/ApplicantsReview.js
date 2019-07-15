import React from "react";
import classes from "./ApplicantsReview.module.css";
import RegBtn from "../../../../UI/Btns/RegBtn/RegBtn";

const ApplicantsReview = ({ location, history }) => {
  const { state: resume } = location;

  function handleReturn() {
    history.push("/job-postings/applicants");
  }

  function renderPostReview() {
    return (
      <>
        <div>
          <h4 className={classes.label}>Name:</h4>
          <p className={classes.textBold}>{resume.fullName}</p>
        </div>
        <div>
          <h4 className={classes.label}>Email:</h4>
          <p className={classes.text}>{resume.email}</p>
        </div>
        <div>
          <h4 className={classes.label}>Summary:</h4>
          <p className={classes.text}>{resume.summary}</p>
        </div>
        <div>
          <h4 className={classes.label}>Education:</h4>
          <p className={classes.text}>{resume.education}</p>
        </div>
        <div>
          <h4 className={classes.label}>Skills:</h4>
          <p className={classes.text}>{resume.skills.join(", ")}</p>
        </div>
        <div>
          <h4 className={classes.label}>Experience:</h4>
          <p className={classes.text}>{resume.experience}</p>
        </div>
        <div className={classes.btnContainer}>
          <RegBtn onClick={handleReturn}>Go Back</RegBtn>
        </div>
      </>
    );
  }

  return <section className={classes.container}>{renderPostReview()}</section>;
};

export default ApplicantsReview;

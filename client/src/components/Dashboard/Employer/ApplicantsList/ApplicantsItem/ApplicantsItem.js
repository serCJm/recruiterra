import React from "react";
import classes from "./ApplicantsItem.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReadMoreLess from "../../../../UI/ReadMoreLess/ReadMoreLess";
import Card from "../../../../UI/Card/Card";

const ApplicantsItem = ({ resume }) => {
  return (
    <Card>
      <Link
        to={{
          pathname: `/job-postings/applicants/${resume._id}`,
          state: resume
        }}
        className={classes.Btn}
      >
        View
      </Link>
      <h2 className={classes.name}>{resume.fullName}</h2>
      <p className={classes.title}>{resume.email}</p>
      <ReadMoreLess text={resume.summary} length={15} />
      <p>Posted on: {new Date(resume.lastUpdated).toLocaleDateString()}</p>
    </Card>
  );
};

ApplicantsItem.propTypes = {
  resume: PropTypes.object.isRequired
};

export default ApplicantsItem;

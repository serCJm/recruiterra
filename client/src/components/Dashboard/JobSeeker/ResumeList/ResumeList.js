import React, { useEffect } from "react";
import classes from "./ResumeList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchResumes } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import JobItem from "../JobItem/JobItem";

const ResumeList = props => {
  useEffect(() => {
    props.fetchResumes();
  }, []);

  function renderJobList() {
    if (props.loading) {
      return <Spinner />;
    } else if (props.resumes.length === 0) {
      return (
        <p className={classes.emptyText}>
          You don't have any job resumes. Please create one by clicking on the
          add button.
        </p>
      );
    }
    console.log(props.resumes);
    return null;
    // return props.resumes
    //   .reverse()
    //   .map(resume => <JobItem key={resume._id} job={resume} />);
  }
  return <section className={classes.container}>{renderJobList()}</section>;
};

function mapStateToProps({ resumes }) {
  return { resumes: resumes.resumesList, loading: resumes.loading };
}

ResumeList.propTypes = {
  fetchJobs: PropTypes.func,
  loading: PropTypes.bool,
  jobs: PropTypes.array
};

export default connect(
  mapStateToProps,
  { fetchResumes }
)(ResumeList);

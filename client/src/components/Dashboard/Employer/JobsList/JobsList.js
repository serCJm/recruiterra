import React, { useEffect, useCallback } from "react";
import classes from "./JobList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchJobs } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import JobItem from "../JobItem/JobItem";

const JobsList = props => {
  const { fetchJobs } = props;
  const fetchJobsHandler = useCallback(() => fetchJobs(), [fetchJobs]);

  useEffect(() => fetchJobsHandler(), [fetchJobsHandler]);

  function renderJobList() {
    if (props.loading) {
      return <Spinner />;
    } else if (props.jobs.length === 0) {
      return (
        <p className={classes.emptyText}>
          You don't have any job posts. Please create one by clicking on the add
          button.
        </p>
      );
    }
    return props.jobs.reverse().map(job => <JobItem key={job._id} job={job} />);
  }
  return <section className={classes.container}>{renderJobList()}</section>;
};

function mapStateToProps({ jobs }) {
  return { jobs: jobs.jobsList, loading: jobs.loading };
}

JobsList.propTypes = {
  fetchJobs: PropTypes.func,
  loading: PropTypes.bool,
  jobs: PropTypes.array
};

export default connect(
  mapStateToProps,
  { fetchJobs }
)(JobsList);

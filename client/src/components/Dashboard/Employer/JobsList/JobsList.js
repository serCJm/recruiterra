import React, { useEffect } from "react";
import classes from "./JobList.module.css";
import { connect } from "react-redux";
import { fetchJobs } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import JobItem from "../JobItem/JobItem";

const JobsList = props => {
  useEffect(() => {
    props.fetchJobs();
  }, []);

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

export default connect(
  mapStateToProps,
  { fetchJobs }
)(JobsList);

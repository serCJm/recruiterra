import React, { useEffect } from "react";
import classes from "./JobList.module.css";
import { connect } from "react-redux";
import { fetchJobs } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import Card from "../../../UI/Card/Card";

const JobsList = props => {
  console.log(props);
  let jobList;
  useEffect(() => {
    props.fetchJobs();
  }, []);
  function renderJobList() {
    if (props.loading) {
      return <Spinner />;
    } else if (props.jobs.length === 0) {
      return (
        <p>
          You don't have any job posts. Please create one by clicking on the add
          button.
        </p>
      );
    }
    return props.jobs.reverse().map(job => (
      <Card key={job._id}>
        <h2>{job.name}</h2>
        <p>{job.subject}</p>
        <p>{job.description}</p>
        <p>Posted on: {new Date(job.lastUpdated).toLocaleDateString()}</p>
      </Card>
    ));
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

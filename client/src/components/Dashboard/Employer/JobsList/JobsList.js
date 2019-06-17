import React, { useEffect } from "react";
import classes from "./JobList.module.css";
import { connect } from "react-redux";
import { fetchJobs } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import Card from "../../../UI/Card/Card";
import ReadMoreLess from "../../../UI/ReadMoreLess/ReadMoreLess";
import DotsBtn from "../../../UI/Btns/DotsBtn/DotsBtn";

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
    return props.jobs.reverse().map(job => (
      <Card key={job._id}>
        <DotsBtn />
        <h2 className={classes.name}>{job.name}</h2>
        <p className={classes.subject}>{job.subject}</p>
        <ReadMoreLess text={job.description} length={15} />
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

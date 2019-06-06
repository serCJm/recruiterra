import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../../../store/actions";

const JobsList = props => {
  let jobList;
  useEffect(() => {
    props.fetchJobs();
  }, []);
  function renderJobList() {
    return props.jobs.reverse().map(job => (
      <div key={job._id}>
        <h2>{job.name}</h2>
        <p>{job.subject}</p>
        <p>{job.description}</p>
        <p>Sent on: {new Date(job.lastUpdated).toLocaleDateString()}</p>
      </div>
    ));
  }
  return <section>{renderJobList()}</section>;
};

function mapStateToProps({ jobs }) {
  return { jobs };
}

export default connect(
  mapStateToProps,
  { fetchJobs }
)(JobsList);

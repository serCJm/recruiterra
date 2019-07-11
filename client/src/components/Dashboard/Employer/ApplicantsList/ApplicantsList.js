import React, { useEffect } from "react";
import classes from "./ApplicantsList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchApplicants } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import JobItem from "../JobItem/JobItem";

const ApplicantsList = props => {
  useEffect(() => {
    props.fetchApplicants();
  }, []);

  function renderApplicantsList() {
    if (props.loading) {
      return <Spinner />;
    } else if (props.applicants.length === 0) {
      return (
        <p className={classes.emptyText}>
          You don't have any applicants. Please create a job post and wait for
          job seekers to apply.
        </p>
      );
    }
    return props.applicants
      .reverse()
      .map(job => <JobItem key={job._id} job={job} />);
  }
  return (
    <section className={classes.container}>{renderApplicantsList()}</section>
  );
};

function mapStateToProps({ jobs }) {
  return { applicants: jobs.applicantsList, loading: jobs.loading };
}

ApplicantsList.propTypes = {
  fetchApplicants: PropTypes.func,
  loading: PropTypes.bool,
  applicantsList: PropTypes.array
};

export default connect(
  mapStateToProps,
  { fetchApplicants }
)(ApplicantsList);

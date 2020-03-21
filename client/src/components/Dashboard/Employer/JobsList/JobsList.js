import React from "react";
import classes from "./JobList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchJobs } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import JobItem from "../JobItem/JobItem";

export const JobsListUnconnected = props => {
	const { fetchJobs } = props;

	React.useEffect(() => {
		async function fetchJobsHandler() {
			await fetchJobs();
		}
		fetchJobsHandler();
	}, [fetchJobs]);

	function renderJobList() {
		if (props.loading) {
			return <Spinner data-test="spinner" />;
		} else if (props.jobs.length === 0) {
			return (
				<p className={classes.emptyText} data-test="message">
					You don't have any job posts. Please create one by clicking on the add
					button.
				</p>
			);
		}
		return props.jobs
			.reverse()
			.map(job => <JobItem key={job._id} job={job} data-test="job-item" />);
	}
	return <section className={classes.container}>{renderJobList()}</section>;
};

function mapStateToProps({ jobs }) {
	return { jobs: jobs.jobsList, loading: jobs.loading };
}

JobsListUnconnected.propTypes = {
	fetchJobs: PropTypes.func,
	loading: PropTypes.bool,
	jobs: PropTypes.array
};

export default connect(mapStateToProps, { fetchJobs })(JobsListUnconnected);

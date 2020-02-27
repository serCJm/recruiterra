import React, { useEffect, useCallback } from "react";
import classes from "./ApplicantsList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchApplicants } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import ApplicantsItem from "./ApplicantsItem/ApplicantsItem";

const ApplicantsList = props => {
	const { fetchApplicants } = props;

	useEffect(() => {
		async function fetchApplicantsHandler() {
			await fetchApplicants();
		}
		fetchApplicantsHandler();
	}, [fetchApplicants]);

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
			.map(resume => <ApplicantsItem key={resume._id} resume={resume} />);
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

export default connect(mapStateToProps, { fetchApplicants })(ApplicantsList);

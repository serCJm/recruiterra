import React from "react";
import classes from "./ApplicantsList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchApplicants } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import ApplicantsItem from "./ApplicantsItem/ApplicantsItem";

export const ApplicantsListUnconnected = props => {
	const { fetchApplicants } = props;

	React.useEffect(() => {
		async function fetchApplicantsHandler() {
			await fetchApplicants();
		}
		fetchApplicantsHandler();
	}, [fetchApplicants]);

	function renderApplicantsList() {
		if (props.loading) {
			return <Spinner data-test="spinner" />;
		} else if (props.applicants.length === 0) {
			return (
				<p className={classes.emptyText} data-test="message">
					You don't have any applicants. Please create a job post and wait for
					job seekers to apply.
				</p>
			);
		}
		return props.applicants
			.reverse()
			.map(resume => (
				<ApplicantsItem
					key={resume._id}
					resume={resume}
					data-test="applicants-item"
				/>
			));
	}
	return (
		<section className={classes.container}>{renderApplicantsList()}</section>
	);
};

function mapStateToProps({ jobs }) {
	return { applicants: jobs.applicantsList, loading: jobs.loading };
}

ApplicantsListUnconnected.propTypes = {
	fetchApplicants: PropTypes.func,
	loading: PropTypes.bool,
	applicantsList: PropTypes.array
};

export default connect(mapStateToProps, { fetchApplicants })(
	ApplicantsListUnconnected
);

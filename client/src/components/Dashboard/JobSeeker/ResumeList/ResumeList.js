import React from "react";
import classes from "./ResumeList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchResumes } from "../../../../store/actions";
import Spinner from "../../../UI/Spinner/Spinner";
import ResumeItem from "../ResumeItem/ResumeItem";

export const ResumeListUnconnected = props => {
	const { fetchResumes } = props;

	React.useEffect(() => {
		async function fetchResumesHandler() {
			await fetchResumes();
		}
		fetchResumesHandler();
	}, [fetchResumes]);

	function renderJobList() {
		if (props.loading) {
			return <Spinner data-test="spinner" />;
		} else if (props.resumes.length === 0) {
			return (
				<p className={classes.emptyText} data-test="message">
					You don't have any job resumes. Please create one by clicking on the
					add button.
				</p>
			);
		}

		return props.resumes
			.reverse()
			.map(resume => (
				<ResumeItem key={resume._id} resume={resume} data-test="resume-item" />
			));
	}
	return <section className={classes.container}>{renderJobList()}</section>;
};

function mapStateToProps({ resumes }) {
	return { resumes: resumes.resumesList, loading: resumes.loading };
}

ResumeListUnconnected.propTypes = {
	fetchResumes: PropTypes.func,
	loading: PropTypes.bool,
	resumes: PropTypes.array
};

export default connect(mapStateToProps, { fetchResumes })(
	ResumeListUnconnected
);

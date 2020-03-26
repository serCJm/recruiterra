import React from "react";
import PropTypes from "prop-types";
import classes from "./JobPostReview.module.css";
import { connect } from "react-redux";
import formFields from "../formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

export const JobPostReviewUnconnected = ({
	onCancel,
	formValues,
	submitJobPost,
	history
}) => {
	function renderPostReview() {
		return formFields.map(({ label, name }) => (
			<div key={name} data-test={`field-${name}`}>
				<h4 className={classes.label}>{label}:</h4>
				<p>{formValues[name]}</p>
			</div>
		));
	}

	async function handleSubmitJobPost(e) {
		e.preventDefault();
		await submitJobPost(formValues);
		history.push("/job-postings");
	}

	return (
		<div className={classes.container} data-test="job-post-review">
			{renderPostReview()}
			<div className={classes.btnContainer}>
				<RegBtn btnStyle="danger" onClick={onCancel} data-test="danger">
					Back
				</RegBtn>
				<RegBtn
					btnStyle="success"
					onClick={handleSubmitJobPost}
					data-test="success"
				>
					Post Job
				</RegBtn>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.jobForm.values
	};
}

JobPostReviewUnconnected.propTypes = {
	onCancel: PropTypes.func,
	formValues: PropTypes.object,
	submitJobPost: PropTypes.func,
	history: PropTypes.object
};

export default withRouter(
	connect(mapStateToProps, actions)(JobPostReviewUnconnected)
);

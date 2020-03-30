import React from "react";
import PropTypes from "prop-types";
import classes from "./ResumeReview.module.css";
import { connect } from "react-redux";
import formFields from "../formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

export const ResumeReviewUnconnected = ({
	onCancel,
	formValues,
	submitResumePost,
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
		await submitResumePost(formValues);
		history.push("/my-resumes");
	}

	return (
		<div className={classes.container} data-test="resume-review">
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
					Post Resume
				</RegBtn>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.resumeForm.values
	};
}

ResumeReviewUnconnected.propTypes = {
	onCancel: PropTypes.func,
	formValues: PropTypes.object,
	submitResumePost: PropTypes.func,
	history: PropTypes.object
};

export default withRouter(
	connect(mapStateToProps, actions)(ResumeReviewUnconnected)
);

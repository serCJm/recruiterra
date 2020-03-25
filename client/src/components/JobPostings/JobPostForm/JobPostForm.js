import React from "react";
import PropTypes from "prop-types";
import classes from "./JobPostForm.module.css";
import { reduxForm, Field } from "redux-form";
import JobField from "../JobField/JobField";
import { Link } from "react-router-dom";
//import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

export const JobPostFormUnconnected = props => {
	function renderFields() {
		return formFields.map(({ name, label }) => (
			<Field
				key={name}
				component={JobField}
				type="text"
				name={name}
				label={label}
				data-test={`field-${name}`}
			/>
		));
	}
	return (
		<>
			<form
				onSubmit={props.handleSubmit(props.onJobPostSubmit)}
				data-test="job-post-form"
			>
				{renderFields()}
				<div className={classes.btnContainer}>
					<Link to="/job-postings" data-test="link">
						<RegBtn btnStyle="danger" data-test="btn-cancel">
							Cancel
						</RegBtn>
					</Link>
					<RegBtn btnStyle="success" type="submit" data-test="btn-next">
						Next
					</RegBtn>
				</div>
			</form>
		</>
	);
};

function validate(values) {
	const errors = {};

	formFields.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = `You must provide a ${name.replace(/s+$/, "")}`;
		}
	});

	return errors;
}

JobPostFormUnconnected.propTypes = {
	handleSubmit: PropTypes.func,
	onJobPostSubmit: PropTypes.func
};

export default reduxForm({
	validate,
	form: "jobForm",
	destroyOnUnmount: false
})(JobPostFormUnconnected);

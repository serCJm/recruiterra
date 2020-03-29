import React from "react";
import PropTypes from "prop-types";
import classes from "./ResumeForm.module.css";
import { reduxForm, Field } from "redux-form";
import ResumeField from "../ResumeField/ResumeField";
import { Link } from "react-router-dom";
import { validateEmail } from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";

export const ResumeFormUnconnected = props => {
	function renderFields() {
		return formFields.map(({ name, label }) => (
			<Field
				key={name}
				component={ResumeField}
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
				onSubmit={props.handleSubmit(props.onResumePostSubmit)}
				data-test="resume-post-form"
			>
				{renderFields()}
				<div className={classes.btnContainer}>
					<Link to="/my-resumes" data-test="link">
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
	errors.email = validateEmail(values.email || "");

	return errors;
}

ResumeFormUnconnected.propTypes = {
	handleSubmit: PropTypes.func,
	onJobPostSubmit: PropTypes.func
};

export default reduxForm({
	validate,
	form: "resumeForm",
	destroyOnUnmount: false
})(ResumeFormUnconnected);

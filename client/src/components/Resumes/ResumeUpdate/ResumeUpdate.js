import React from "react";
import classes from "../ResumeForm/ResumeForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import ResumeField from "../ResumeField/ResumeField";
import { Link } from "react-router-dom";
//import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";
import { updateResumes } from "../../../store/actions";

// NOTE: there's a bug because if page gets reloaded on this component
// state will be lost causing error in mapStateToProps
// TODO: save edited job into local storage - DONE
export const ResumeUpdateUnconnected = props => {
	async function handleResumeUpdate(formValues) {
		await props.updateResumes(formValues, props.currentResumeId);
		props.history.push("/my-resumes");
	}
	function renderFields() {
		return formFields.map(({ name, label }) => {
			return (
				<Field
					key={name}
					component={ResumeField}
					type="text"
					name={name}
					label={label}
					data-test={`field-${name}`}
				/>
			);
		});
	}
	return (
		<section className={classes.formContainer} data-test="resume-update">
			<form
				onSubmit={props.handleSubmit(handleResumeUpdate)}
				data-test="resume-form"
			>
				{renderFields()}
				<div className={classes.btnContainer}>
					<Link to="/my-resumes" data-test="link">
						<RegBtn btnStyle="danger" data-test="btn-cancel">
							Cancel
						</RegBtn>
					</Link>
					<RegBtn btnStyle="success" type="submit" data-test="btn-update">
						Update
					</RegBtn>
				</div>
			</form>
		</section>
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

const mapStateToProps = ({ resumes }) => {
	const values = localStorage.getItem("resumeValues");
	return {
		initialValues: JSON.parse(values),
		currentResumeId: localStorage.getItem("currentResumeId")
	};
};

ResumeUpdateUnconnected.propTypes = {
	currentJobId: PropTypes.string,
	handleSubmit: PropTypes.func,
	updateResumes: PropTypes.func,
	history: PropTypes.object
};

export default connect(mapStateToProps, { updateResumes })(
	reduxForm({
		validate,
		form: "resumeFormUpdate",
		destroyOnUnmount: true
	})(ResumeUpdateUnconnected)
);

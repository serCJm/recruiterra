import React from "react";
import classes from "../JobPostForm/JobPostForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import JobField from "../JobField/JobField";
import { Link } from "react-router-dom";
//import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";
import RegBtn from "../../UI/Btns/RegBtn/RegBtn";
import { updateJobPost } from "../../../store/actions";

// NOTE: there's a bug because if page gets reloaded on this component
// state will be lost causing error in mapStateToProps
// TODO: save edited job into local storage - DONE
export const JobPostUpdateUnconnected = props => {
	async function handleJobPostUpdate(formValues) {
		await props.updateJobPost(formValues, props.currentJobId);
		props.history.push("/job-postings");
	}
	function renderFields() {
		return formFields.map(({ name, label }) => {
			return (
				<Field
					key={name}
					component={JobField}
					type="text"
					name={name}
					label={label}
					data-test={`field-${name}`}
				/>
			);
		});
	}
	return (
		<section className={classes.formContainer} data-test="job-post-update">
			<form
				onSubmit={props.handleSubmit(handleJobPostUpdate)}
				data-test="job-post-form"
			>
				{renderFields()}
				<div className={classes.btnContainer}>
					<Link to="/job-postings" data-test="link">
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

const mapStateToProps = ({ jobs }) => {
	//const job = jobs.jobsList.filter(job => job._id === jobs.currentJobId);
	const values = localStorage.getItem("jobValues");
	return {
		initialValues: JSON.parse(values),
		currentJobId: localStorage.getItem("currentJobId")
	};
};

JobPostUpdateUnconnected.propTypes = {
	currentJobId: PropTypes.string,
	handleSubmit: PropTypes.func,
	updateJobPost: PropTypes.func,
	history: PropTypes.object
};

export default connect(mapStateToProps, { updateJobPost })(
	reduxForm({
		validate,
		form: "jobFormUpdate",
		destroyOnUnmount: true
	})(JobPostUpdateUnconnected)
);

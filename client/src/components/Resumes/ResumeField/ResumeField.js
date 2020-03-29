import React from "react";
import classes from "./ResumeField.module.css";
import PropTypes from "prop-types";

const ResumeField = ({ input, label, meta: { error, touched } }) => {
	return (
		<>
			<div className={classes.inputContainer} data-test="resume-field">
				{!/summary|education|experience/.test(input.name) ? (
					<input
						{...input}
						className={classes.input}
						placeholder={label}
						data-test="input"
					/>
				) : (
					<textarea
						{...input}
						className={classes.textarea}
						placeholder={label}
						data-test="textarea"
					/>
				)}
				<label className={classes.label} data-test="label">
					{label}
				</label>
				<div className={classes.error} data-test="error">
					{touched && error}
				</div>
			</div>
		</>
	);
};

ResumeField.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string,
	meta: PropTypes.object
};

export default ResumeField;

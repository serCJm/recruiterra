import React from "react";
import PropTypes from "prop-types";
import classes from "./JobField.module.css";

const JobField = ({ input, label, meta: { error, touched } }) => {
	return (
		<>
			<div className={classes.inputContainer} data-test="job-field">
				{input.name !== "description" ? (
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

JobField.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string,
	meta: PropTypes.object
};

export default JobField;

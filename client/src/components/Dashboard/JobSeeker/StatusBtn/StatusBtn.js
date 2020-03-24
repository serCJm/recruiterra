import React from "react";
import classes from "./StatusBtn.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateStatus } from "../../../../store/actions";

export const StatusBtnUnconnected = ({ status, updateStatus, id }) => {
	return (
		<button
			onClick={() => updateStatus(id)}
			className={status ? classes.active : classes.inactive}
			data-test="status-btn"
		>
			{status ? "active" : "inactive"}
		</button>
	);
};

StatusBtnUnconnected.propTypes = {
	status: PropTypes.bool,
	updateStatus: PropTypes.func,
	id: PropTypes.string
};

export default connect(null, { updateStatus })(StatusBtnUnconnected);

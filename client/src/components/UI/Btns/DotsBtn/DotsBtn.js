import React from "react";
import PropTypes from "prop-types";
import classes from "./DotsBtn.module.css";

const DotsBtn = ({ onClick }) => {
	return (
		<button
			className={classes.btnOptins}
			onClick={onClick}
			data-test="dots-btn"
		>
			<span className={classes.circle} />
			<span className={classes.circle} />
			<span className={classes.circle} />
		</button>
	);
};

DotsBtn.propTypes = {
	onClick: PropTypes.func
};

export default DotsBtn;

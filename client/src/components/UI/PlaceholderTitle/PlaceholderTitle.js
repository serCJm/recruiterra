import React from "react";
import classes from "./PlaceholderTitle.module.css";
import PropTypes from "prop-types";

const PlaceholderTitle = props => {
	return (
		<h2 className={classes.title} data-test="placeholder-title">
			{props.children}
		</h2>
	);
};

PlaceholderTitle.propTypes = {
	children: PropTypes.node
};

export default PlaceholderTitle;

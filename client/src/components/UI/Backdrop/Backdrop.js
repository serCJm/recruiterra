import React from "react";
import PropTypes from "prop-types";
import classes from "./Backdrop.module.css";

const Backdrop = ({ isOpen, onClick }) =>
	isOpen ? (
		<div className={classes.backdrop} onClick={onClick} data-test="backdrop" />
	) : null;

Backdrop.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Backdrop;

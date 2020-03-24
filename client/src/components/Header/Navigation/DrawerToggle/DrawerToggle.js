import React from "react";
import classes from "./DrawerToggle.module.css";
import PropTypes from "prop-types";

const DrawerToggle = ({ onClick, isOpen }) => {
	let menuClass = isOpen ? classes.active : classes.menu;
	return (
		<div className={menuClass} onClick={onClick} data-test="drawer-toggle">
			<div className={classes.bar} />
			<div className={classes.bar} />
			<div className={classes.bar} />
		</div>
	);
};

DrawerToggle.propTypes = {
	onClick: PropTypes.func,
	isOpen: PropTypes.bool
};

export default DrawerToggle;

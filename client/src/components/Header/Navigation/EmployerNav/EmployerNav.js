import React from "react";
import classes from "./EmployerNav.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Payments from "../../../Payments/Payments";

const EmployerNav = ({ credits }) => {
	return (
		<>
			<li className={classes.creditsContainer} data-test="credits">
				Credits:{" "}
				<span
					className={
						credits > 0 ? classes.creditsSuccess : classes.creditsDanger
					}
					data-test="credits-number"
				>
					{credits}
				</span>
			</li>
			<li className={classes.navItemContainer}>
				<Payments data-test="payments" />
			</li>
			<li className={classes.navItemContainer}>
				<Link
					to="/job-postings/applicants"
					className={classes.linkBtn}
					data-test="applicants-link"
				>
					Applicants
				</Link>
			</li>
			<li className={classes.navItemContainer}>
				<a className={classes.linkBtn} href={"/api/logout"} data-test="logout">
					Logout
				</a>
			</li>
		</>
	);
};

EmployerNav.propTypes = {
	credits: PropTypes.number
};

export default EmployerNav;

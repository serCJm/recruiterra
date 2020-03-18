import React from "react";
import classes from "./ApplicantsItem.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReadMoreLess from "../../../../UI/ReadMoreLess/ReadMoreLess";
import Card from "../../../../UI/Card/Card";

const ApplicantsItem = ({ resume }) => {
	return (
		<Card data-test="applicants-item">
			<Link
				to={{
					pathname: `/job-postings/applicants/${resume._id}`,
					state: resume
				}}
				className={classes.Btn}
				data-test="link"
			>
				View
			</Link>
			<h2 className={classes.name} data-test="name">
				{resume.fullName}
			</h2>
			<p className={classes.title} data-test="email">
				{resume.email}
			</p>
			<ReadMoreLess text={resume.summary} length={15} data-test="read-more" />
			<p data-test="date">
				Posted on: {new Date(resume.lastUpdated).toLocaleDateString()}
			</p>
		</Card>
	);
};

ApplicantsItem.propTypes = {
	resume: PropTypes.object.isRequired
};

export default ApplicantsItem;

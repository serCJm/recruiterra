import React from "react";
import classes from "./ResumeItem.module.css";
import PropTypes from "prop-types";
import Card from "../../../UI/Card/Card";
import ReadMoreLess from "../../../UI/ReadMoreLess/ReadMoreLess";
import DotsBtn from "../../../UI/Btns/DotsBtn/DotsBtn";
import ResumeItemOptions from "../ResumeItemOptions/ResumeItemOptions";
import StatusBtn from "../StatusBtn/StatusBtn";

const ResumeItem = ({ resume }) => {
	const [showMenu, setShowMenu] = React.useState("closed");

	function handleMenu() {
		if (showMenu === "closed") {
			setShowMenu("opened");
		} else {
			setShowMenu("closing");
			setTimeout(() => setShowMenu("closed"), 300);
		}
	}

	return (
		<Card data-test="resume-item">
			<StatusBtn
				status={resume.status}
				id={resume._id}
				data-test="status-btn"
			/>
			<DotsBtn onClick={handleMenu} data-test="dots-btn" />
			<ResumeItemOptions
				status={showMenu}
				resume={resume}
				data-test="resume-options"
			/>
			<h2 className={classes.name} data-test="resume-name">
				{resume.resumeName}
			</h2>
			<p className={classes.title} data-test="resume-fullName">
				{resume.fullName}
			</p>
			<ReadMoreLess
				text={resume.summary}
				length={15}
				data-test="resume-summary"
			/>
			<p data-test="resume-date">
				Posted on: {new Date(resume.lastUpdated).toLocaleDateString()}
			</p>
		</Card>
	);
};

ResumeItem.propTypes = {
	resume: PropTypes.object
};

export default ResumeItem;

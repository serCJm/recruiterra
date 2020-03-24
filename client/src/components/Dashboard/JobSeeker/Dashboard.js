import React from "react";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import ResumeList from "./ResumeList/ResumeList";
// import JobsList from "./JobsList/JobsList";

const Dashboard = () => {
	return (
		<>
			<ResumeList data-test="resume-list" />
			<Link to="/resumes/new" className={classes.btn} data-test="link">
				Add
			</Link>
		</>
	);
};

export default Dashboard;

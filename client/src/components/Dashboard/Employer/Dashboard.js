import React from "react";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import JobsList from "./JobsList/JobsList";

const Dashboard = () => {
	return (
		<>
			<JobsList data-test="jobs-list" />
			<Link to="/job-postings/new" className={classes.btn} data-test="link">
				Add
			</Link>
		</>
	);
};

export default Dashboard;

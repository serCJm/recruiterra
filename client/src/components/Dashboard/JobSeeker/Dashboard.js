import React from "react";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";
// import JobsList from "./JobsList/JobsList";

const Dashboard = () => {
  return (
    <>
      <Link to="/resumes/new" className={classes.btn}>
        Add
      </Link>
    </>
  );
};

export default Dashboard;

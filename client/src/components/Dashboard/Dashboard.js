import React from "react";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Link to="/job-postings/new" className={classes.btn}>
      Add
    </Link>
  );
};

export default Dashboard;

import React from "react";
import classes from "./JobSeekerNav.module.css";
import { Link } from "react-router-dom";

const JobSeekerNav = ({ handleUserLogout }) => {
  return (
    <>
      {/* <li className={classes.creditsContainer}>
        <Link to="/job-invitations" className={classes.link}>
          Invitations
        </Link>
      </li> */}
      <li className={classes.navItemContainer}>
        <button className={classes.linkBtn} onClick={handleUserLogout}>
          Logout
        </button>
      </li>
    </>
  );
};

export default JobSeekerNav;

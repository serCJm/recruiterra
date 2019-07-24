import React from "react";
import classes from "./EmployerNav.module.css";
import { Link } from "react-router-dom";
import Payments from "../../../Payments/Payments";

const EmployerNav = ({ credits }) => {
  return (
    <>
      <li className={classes.creditsContainer}>
        Credits:{" "}
        <span
          className={
            credits > 0 ? classes.creditsSuccess : classes.creditsDanger
          }
        >
          {credits}
        </span>
      </li>
      <li className={classes.navItemContainer}>
        <Payments />
      </li>
      <li className={classes.navItemContainer}>
        <Link to="/job-postings/applicants" className={classes.linkBtn}>
          Applicants
        </Link>
      </li>
      <li className={classes.navItemContainer}>
        <a className={classes.linkBtn} href={"/api/logout"}>
          Logout
        </a>
      </li>
    </>
  );
};

export default EmployerNav;

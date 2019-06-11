import React from "react";
import classes from "./EmployerNav.module.css";
import Payments from "../../../Payments/Payments";

const EmployerNav = ({ credits, handleUserLogout }) => {
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
        <button className={classes.linkBtn} onClick={handleUserLogout}>
          Logout
        </button>
      </li>
    </>
  );
};

export default EmployerNav;

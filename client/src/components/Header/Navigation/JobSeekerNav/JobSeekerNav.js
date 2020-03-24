import React from "react";
import classes from "./JobSeekerNav.module.css";
//import { Link } from "react-router-dom";

const JobSeekerNav = () => {
	return (
		<>
			{/* <li className={classes.creditsContainer}>
        <Link to="/job-invitations" className={classes.link}>
          Invitations
        </Link>
      </li> */}
			<li className={classes.navItemContainer}>
				<a className={classes.linkBtn} href={"/api/logout"} data-test="logout">
					Logout
				</a>
			</li>
		</>
	);
};

export default JobSeekerNav;

import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Navigation.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingNav from "./LandingNav/LandingNav";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import Backdrop from "../../UI/Backdrop/Backdrop";
import EmployerNav from "./EmployerNav/EmployerNav";
import JobSeekerNav from "./JobSeekerNav/JobSeekerNav";

const Navigation = props => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  function handleMobileMenu() {
    setMobileOpen(isMobileOpen => !isMobileOpen);
  }
  let linkStyle = classes.link;
  if (props.transparent) linkStyle = classes.linkLanding;

  function renderContent() {
    if (props.auth == null) {
      return;
    } else if (props.auth === false) {
      return (
        <LandingNav
          containerClass={classes.linkContainer}
          linkClass={linkStyle}
          isLanding={props.isLanding}
          transparent={props.transparent}
        />
      );
    } else if (props.auth && props.auth.usertype === "employer") {
      return <EmployerNav credits={props.auth.credits} />;
    } else if (props.auth && props.auth.usertype === "job seeker") {
      return <JobSeekerNav />;
    }
  }
  function renderHomeLink() {
    if (props.auth) {
      if (props.auth.usertype === "employer") {
        return "/job-postings";
      } else {
        return "/my-resumes";
      }
    } else {
      return "/";
    }
  }
  return (
    <nav className={classes.navigation}>
      <Link to={renderHomeLink()} className={classes.logo}>
        Recruiterra
      </Link>
      <div className={classes.mobileOnly}>
        <DrawerToggle onClick={handleMobileMenu} isOpen={isMobileOpen} />
        <ul
          className={
            isMobileOpen ? classes.mobileMenuOpen : classes.mobileMenuClose
          }
        >
          {renderContent()}
        </ul>
        <Backdrop onClick={handleMobileMenu} isOpen={isMobileOpen} />
      </div>
      <div className={classes.desktopOnly}>
        <ul className={classes.desktopLinks}>{renderContent()}</ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

Navigation.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  isLanding: PropTypes.bool
};

export default withRouter(connect(mapStateToProps)(Navigation));

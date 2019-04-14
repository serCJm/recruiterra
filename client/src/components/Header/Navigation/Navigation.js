import React, { useState } from "react";
import classes from "./Navigation.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Payments from "../../Payments/Payments";
import LandingNav from "./LandingNav/LandingNav";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Navigation = props => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  function handleMobileMenu() {
    setMobileOpen(isMobileOpen => !isMobileOpen);
  }

  function handleUserLogout() {
    props.logoutUser();
    props.history.push("/");
  }

  let linkStyle = classes.link;
  if (props.isLanding) linkStyle = classes.linkLanding;

  function renderContent() {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <LandingNav
            containerClass={classes.linkContainer}
            linkClass={linkStyle}
          />
        );
      default:
        return (
          <>
            <li>Credits: {props.auth.credits}</li>
            <li>
              <Payments />
            </li>
            <li className={classes.linkContainer}>
              <button className={classes.link} onClick={handleUserLogout}>
                Logout
              </button>
            </li>
          </>
        );
    }
  }
  return (
    <nav className={classes.navigation}>
      <Link to={props.auth ? "/job-postings" : "/"} className={classes.logo}>
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

export default connect(
  mapStateToProps,
  actions
)(withRouter(Navigation));

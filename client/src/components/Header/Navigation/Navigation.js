import React from "react";
import classes from "./Navigation.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Payments from "../../Payments/Payments";

const Navigation = props => {
  function handleUserLogout() {
    props.logoutUser();
    props.history.push("/");
  }

  function renderContent() {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <>
            <li className={classes.linkContainer}>
              <a href="/auth/google" className={classes.link}>
                Signup
              </a>
            </li>
            <li className={classes.linkContainer}>
              <a href="/auth/google" className={classes.link}>
                Login
              </a>
            </li>
          </>
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
      <ul className={classes.links}>
        <li className={classes.linkContainer}>
          <a href="#" className={classes.link}>
            Sass
          </a>
        </li>
        <li className={classes.linkContainer}>
          <a href="#" className={classes.link}>
            Components
          </a>
        </li>
        {renderContent()}
      </ul>
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

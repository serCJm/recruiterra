import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";

const Header = props => {
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
          <li className={classes.linkContainer}>
            <a href="/auth/google" className={classes.link}>
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <li className={classes.linkContainer}>
            <button className={classes.link} onClick={handleUserLogout}>
              Logout
            </button>
          </li>
        );
    }
  }
  return (
    <nav className={classes.navigation}>
      <a href="#" className={classes.logo}>
        Recruiterra
      </a>
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
)(withRouter(Header));

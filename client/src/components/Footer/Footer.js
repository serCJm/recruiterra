import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./Footer.module.css";
import SectionWithInterOb from "../UI/SectionWithInterOb/SectionWithInterOb";

const Footer = ({ style, location }) => {
  return (
    <>
      {location === "/" ? (
        <footer className={style}>
          <SectionWithInterOb id="contact" className={classes.location}>
            <address className={classes.address}>
              Recruiterra
              <br />
              4444 Canada Way
              <br />
              H5N 1Z7
              <br />
              Vancouver, BC
              <br />
              Canada
            </address>
          </SectionWithInterOb>
          <section className={classes.footer}>
            <div className={classes.footerContainer}>
              <p>Copyright © 2019 by Recruiterra.</p>
              <p>All Right Reserved.</p>
            </div>
          </section>
        </footer>
      ) : null}
    </>
  );
};

Footer.propTypes = {
  style: PropTypes.string
};

export default withRouter(Footer);

import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={classes.location}>
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
      </section>
      <section className={classes.footer}>
        <div className={classes.footerContainer}>
          <p>Copyright © 2019 by Recruiterra.</p>
          <p>All Right Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;

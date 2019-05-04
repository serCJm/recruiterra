import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useIntersectObserver } from "../../utils/hooks";
import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

const Header = props => {
  const [setPixelRef, observedEl] = useIntersectObserver();
  const [headerStyle, setHeaderStyle] = useState(
    props.location.pathname === "/" ? classes.headerLanding : classes.header
  );
  const [isLanding, setLanding] = useState(props.location.pathname === "/");

  useEffect(() => {
    if (props.location.pathname === "/") {
      if (observedEl.target && !observedEl.isIntersecting) {
        setHeaderStyle(classes.header);
        setLanding(isLanding => !isLanding);
      } else {
        setHeaderStyle(classes.headerLanding);
        setLanding(isLanding => !isLanding);
      }
    }
  }, [props.location, observedEl]);

  return (
    <>
      <header className={headerStyle}>
        <Navigation isLanding={isLanding} />
      </header>
      <div ref={setPixelRef} className={classes.topOfSitePixelAnchor} />
    </>
  );
};

export default withRouter(Header);

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useIntersectObserver } from "../../utils/hooks";
import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

const Header = props => {
  const [setPixelRef, observedEl] = useIntersectObserver();
  const [isLanding, setLanding] = useState(false);

  let headerStyle = classes.header;
  if (props.location.pathname === "/" && observedEl.isIntersecting) {
    headerStyle = classes.headerLanding;
    setLanding(true);
  }

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

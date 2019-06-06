import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useIntersectObserver } from "../../utils/hooks";
import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

const Header = props => {
  const [setPixelRef, observedEl] = useIntersectObserver();

  const [isLanding, setLanding] = useState(props.location.pathname === "/");
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    if (props.location.pathname === "/") {
      setLanding(true);
      if (observedEl.target && !observedEl.isIntersecting) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    } else {
      setTransparent(false);
      setLanding(false);
    }
  }, [props.location, observedEl.isIntersecting, observedEl.target]);

  return (
    <>
      <header className={transparent ? classes.headerLanding : classes.header}>
        <Navigation isLanding={isLanding} transparent={transparent} />
      </header>
      <div ref={setPixelRef} className={classes.topOfSitePixelAnchor} />
    </>
  );
};

export default withRouter(Header);

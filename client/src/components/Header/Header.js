import React, { useEffect } from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(entries => {
        console.log(entries);
        if (entries[0].boundingClientRect.y < 0) {
          console.log("hi");
          // document
          //   .querySelector(`.${classes.header}`)
          //   .classList.add(`.${classes.headerPrimary}`);
        } else {
          console.log("back");
        }
      });
      console.log(document.querySelector(`.${classes.topOfSitePixelAnchor}`));
      observer.observe(
        document.querySelector(`.${classes.topOfSitePixelAnchor}`)
      );
    }
  }, []);

  return (
    <>
      <header className={classes.header}>
        <Navigation />
      </header>
      <div className={classes.topOfSitePixelAnchor} />
    </>
  );
};

export default Header;

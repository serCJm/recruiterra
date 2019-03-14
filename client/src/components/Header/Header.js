import React from "react";
import classes from "./Header.module.css";

const Header = () => {
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
        <li className={classes.linkContainer}>
          <a href="#" className={classes.link}>
            Login With Google
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./LandingNav.module.css";
import { ActiveNavLink } from "../../../context";
import { smoothScroll } from "../../../../utils/helpers";

const contents = [
  { href: "#about", text: "About", onClick: el => smoothScroll(el) },
  { href: "#how", text: "How", onClick: el => smoothScroll(el) },
  { href: "#contact", text: "Contact", onClick: el => smoothScroll(el) },
  { href: "/sign-up", text: "Sign Up" },
  { href: "/auth/google", text: "Log In" }
];

const LandingNav = ({ containerClass, linkClass, isLanding }) => {
  const selected = useContext(ActiveNavLink);
  function renderContent(item) {
    switch (item.text) {
      case "Sign Up":
        return (
          <Link
            to={item.href}
            className={
              !isLanding ? `${linkClass} ${classes.selected}` : linkClass
            }
          >
            {item.text}
          </Link>
        );
      default:
        return (
          <a
            href={item.href}
            className={
              !isLanding && selected.id === item.text.toLocaleLowerCase()
                ? `${linkClass} ${classes.selected}`
                : linkClass
            }
            onClick={item.onClick}
          >
            {item.text}
          </a>
        );
    }
  }
  return (
    <>
      {contents.map(item => (
        <li key={item.text} className={containerClass}>
          {renderContent(item)}
        </li>
      ))}
    </>
  );
};

LandingNav.propTypes = {
  containerClass: PropTypes.string,
  linkClass: PropTypes.string,
  isLanding: PropTypes.bool
};

export default LandingNav;

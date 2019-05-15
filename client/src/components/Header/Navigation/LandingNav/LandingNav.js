import React, { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./LandingNav.module.css";
import { ActiveNavLink } from "../../../context";
import { smoothScroll } from "../../../../utils/helpers";

const contents = [
  { href: "#about", text: "About", onClick: el => smoothScroll(el) },
  { href: "#how", text: "How", onClick: el => smoothScroll(el) },
  { href: "#contact", text: "Contact", onClick: el => smoothScroll(el) },
  { href: "/auth/google", text: "Signup" },
  { href: "/auth/google", text: "Login" }
];

const LandingNav = ({ containerClass, linkClass, isLanding }) => {
  const selected = useContext(ActiveNavLink);
  return (
    <>
      {contents.map(item => (
        <li key={item.text} className={containerClass}>
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

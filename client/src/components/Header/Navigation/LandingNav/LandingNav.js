import React, { useContext } from "react";
import classes from "./LandingNav.module.css";
import { ActiveNavLink } from "../../../context";

const contents = [
  { href: "#about", text: "About" },
  { href: "#how", text: "How" },
  { href: "#contact", text: "Contact" },
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
          >
            {item.text}
          </a>
        </li>
      ))}
    </>
  );
};

export default LandingNav;

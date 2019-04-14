import React from "react";

const LandingNav = ({ containerClass, linkClass }) => {
  return (
    <>
      <li className={containerClass}>
        <a href="#about" className={linkClass}>
          About
        </a>
      </li>
      <li className={containerClass}>
        <a href="#how" className={linkClass}>
          How
        </a>
      </li>
      <li className={containerClass}>
        <a href="#contact" className={linkClass}>
          Contact
        </a>
      </li>
      <li className={containerClass}>
        <a href="/auth/google" className={linkClass}>
          Signup
        </a>
      </li>
      <li className={containerClass}>
        <a href="/auth/google" className={linkClass}>
          Login
        </a>
      </li>
    </>
  );
};

export default LandingNav;

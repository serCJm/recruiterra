import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classes from "./LandingNav.module.css";
import { ActiveNavLink } from "../../../context/ActiveLandingLinkProvider";
import { smoothScroll } from "../../../../utils/helpers";

const contents = [
	{
		href: "#about",
		altHref: "/#about",
		text: "About",
		onClick: el => smoothScroll(el)
	},
	{
		href: "#how",
		altHref: "/#how",
		text: "How",
		onClick: el => smoothScroll(el)
	},
	{
		href: "#contact",
		altHref: "/#contact",
		text: "Contact",
		onClick: el => smoothScroll(el)
	},
	{ href: "/sign-up", text: "Sign Up" },
	{ href: "/log-in", text: "Log In" }
];

const LandingNav = ({ containerClass, linkClass, isLanding, transparent }) => {
	const selected = useContext(ActiveNavLink);

	function renderContent(item) {
		if (item.text === "Sign Up" || item.text === "Log In") {
			return (
				<NavLink
					to={item.href}
					className={linkClass}
					activeClassName={classes.active}
				>
					{item.text}
				</NavLink>
			);
		} else {
			return (
				<a
					href={isLanding ? item.href : item.altHref}
					className={
						!transparent &&
						isLanding &&
						selected.id === item.text.toLocaleLowerCase()
							? `${linkClass} ${classes.active}`
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
	isLanding: PropTypes.bool,
	transparent: PropTypes.bool
};

export default LandingNav;

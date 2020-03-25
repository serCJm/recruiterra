import React from "react";
import PropTypes from "prop-types";
import classes from "./Navigation.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingNav from "./LandingNav/LandingNav";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import Backdrop from "../../UI/Backdrop/Backdrop";
import EmployerNav from "./EmployerNav/EmployerNav";
import JobSeekerNav from "./JobSeekerNav/JobSeekerNav";

export const NavigationUnconnected = props => {
	const [isMobileOpen, setMobileOpen] = React.useState(false);

	function handleMobileMenu() {
		setMobileOpen(isMobileOpen => !isMobileOpen);
	}
	let linkStyle = classes.link;
	if (props.transparent) linkStyle = classes.linkLanding;

	function renderContent() {
		if (props.auth == null) {
			return;
		} else if (props.auth === false) {
			return (
				<LandingNav
					containerClass={classes.linkContainer}
					linkClass={linkStyle}
					isLanding={props.isLanding}
					transparent={props.transparent}
					data-test="landing-nav"
				/>
			);
		} else if (props.auth && props.auth.usertype === "employer") {
			return (
				<EmployerNav credits={props.auth.credits} data-test="employer-nav" />
			);
		} else if (props.auth && props.auth.usertype === "job seeker") {
			return <JobSeekerNav data-test="job-seeker-nav" />;
		}
	}
	function renderHomeLink() {
		if (props.auth) {
			if (props.auth.usertype === "employer") {
				return "/job-postings";
			} else {
				return "/my-resumes";
			}
		} else {
			return "/";
		}
	}
	return (
		<nav className={classes.navigation} data-test="navigation">
			<Link
				to={renderHomeLink()}
				className={classes.logo}
				data-test="logo-link"
			>
				Recruiterra
			</Link>
			<div className={classes.mobileOnly} data-test="mobile">
				<DrawerToggle
					onClick={handleMobileMenu}
					isOpen={isMobileOpen}
					data-test="drawer-toggle"
				/>
				<ul
					className={
						isMobileOpen ? classes.mobileMenuOpen : classes.mobileMenuClose
					}
					data-test="mobile-menu"
				>
					{renderContent()}
				</ul>
				<Backdrop
					onClick={handleMobileMenu}
					isOpen={isMobileOpen}
					data-test="backdrop"
				/>
			</div>
			<div className={classes.desktopOnly} data-test="desktop">
				<ul className={classes.desktopLinks}>{renderContent()}</ul>
			</div>
		</nav>
	);
};

function mapStateToProps({ auth }) {
	return {
		auth
	};
}

NavigationUnconnected.propTypes = {
	auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	isLanding: PropTypes.bool
};

export default withRouter(connect(mapStateToProps)(NavigationUnconnected));

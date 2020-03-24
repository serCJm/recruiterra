import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./Footer.module.css";
import SectionWithInterOb from "../UI/SectionWithInterOb/SectionWithInterOb";

export const FooterUnconnected = ({ style, location }) => {
	const [footerBgClass, setfooterBgClass] = React.useState(classes.location);

	/* global Modernizr */
	React.useEffect(() => {
		if (Modernizr.webp) {
			setfooterBgClass(classes.locationWebP);
		} else if (Modernizr.jpeg2000) {
			setfooterBgClass(classes.locationJP2);
		}
	}, []);
	return (
		<>
			{location.pathname === "/" ? (
				<footer className={style} data-test="footer">
					<SectionWithInterOb
						id="contact"
						className={footerBgClass}
						data-test="observer"
					>
						<address className={classes.address} data-test="address">
							Recruiterra
							<br />
							4444 Canada Way
							<br />
							H5N 1Z7
							<br />
							Vancouver, BC
							<br />
							Canada
						</address>
					</SectionWithInterOb>
					<section className={classes.footer} data-test="copyright">
						<div className={classes.footerContainer}>
							<p>Copyright © 2019 by Recruiterra.</p>
							<p>All Right Reserved.</p>
						</div>
					</section>
				</footer>
			) : null}
		</>
	);
};

FooterUnconnected.propTypes = {
	style: PropTypes.string
};

export default withRouter(FooterUnconnected);

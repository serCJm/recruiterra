import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useIntersectObserver } from "../../utils/hooks";
import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

export const HeaderUnconnected = props => {
	const [setPixelRef, observedEl] = useIntersectObserver();

	const [isLanding, setLanding] = React.useState(
		props.location.pathname === "/"
	);
	const [transparent, setTransparent] = React.useState(true);

	React.useEffect(() => {
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
			<header
				className={transparent ? classes.headerLanding : classes.header}
				data-test="header"
			>
				<Navigation
					isLanding={isLanding}
					transparent={transparent}
					data-test="navigation"
				/>
			</header>
			<div
				ref={setPixelRef}
				className={classes.topOfSitePixelAnchor}
				data-test="anchor"
			/>
		</>
	);
};

HeaderUnconnected.propTypes = {
	location: PropTypes.object
};

export default withRouter(HeaderUnconnected);

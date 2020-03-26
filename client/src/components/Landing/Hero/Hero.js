import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
	const [heroClass, setHeroClass] = React.useState(classes.heroJPEG);
	/* global Modernizr */

	React.useEffect(() => {
		if (Modernizr.webp) {
			setHeroClass(classes.heroWebP);
		} else if (Modernizr.jpeg2000) {
			setHeroClass(classes.heroJP2);
		}
	}, []);
	return (
		<section className={heroClass} data-test="hero">
			<h1 data-test="title">
				Post Jobs And Apply For Positions Easily With Recruiterra
			</h1>
			<Link to="/sign-up" className={classes.btn} data-test="link">
				Get Started
			</Link>
		</section>
	);
};

export default Hero;

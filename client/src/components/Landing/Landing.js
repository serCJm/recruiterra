import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import How from "./How/How";

const Landing = () => {
	return (
		<>
			<Hero data-test="hero" />
			<About data-test="about" />
			<How data-test="how"></How>
		</>
	);
};

export default Landing;

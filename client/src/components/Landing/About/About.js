import React from "react";
import classes from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMousePointer,
	faHandHoldingUsd,
	faClock
} from "@fortawesome/free-solid-svg-icons";
import SectionWithInterOb from "../../UI/SectionWithInterOb/SectionWithInterOb";
import Card from "../../UI/Card/Card";

export const content = {
	title: "Recruiterra Allows You To Simplify Hiring Process Like Never Before",
	description1:
		"Employers post jobs fast with a simple job creation process. Your posting will be automatically delivered to all potential candidates that match your criteria. All you have to do is screen and hire.",
	description2:
		"Job seekers create resume once. Then receive relevant job postings in your email box. All you have to do is manage applicants with one click.",
	features: [
		{
			title: "Simple To Use",
			icon: <FontAwesomeIcon icon={faMousePointer} />,
			description:
				"Spend just a couple of minutes on initial set up. We take care of the rest.    "
		},
		{
			title: "Free Account",
			icon: <FontAwesomeIcon icon={faHandHoldingUsd} />,
			description:
				"Create an account and start benefitting from Recruiterra for free."
		},
		{
			title: "Save Time",
			icon: <FontAwesomeIcon icon={faClock} />,
			description:
				"Forget spending hours searching boards for applicants and jobs. Recruiterra approach takes seconds."
		}
	]
};

const About = () => {
	return (
		<SectionWithInterOb id="about" className={classes.about} data-test="about">
			<h2 data-test="title">{content.title}</h2>
			<div className={classes.descriptionContainer}>
				<p data-test="desc1">{content.description1}</p>
				<p data-test="desc2">{content.description2}</p>
			</div>
			<div className={classes.featuresContainer} data-test="features-container">
				{content.features.map(item => (
					<Card key={item.title} data-test={`card-${item.title}`}>
						<h3>{item.title}</h3>
						<span className={classes.icon}>{item.icon}</span>
						<p>{item.description}</p>
					</Card>
				))}
			</div>
		</SectionWithInterOb>
	);
};

export default About;

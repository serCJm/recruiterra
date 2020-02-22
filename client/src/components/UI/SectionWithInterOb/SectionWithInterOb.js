import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useIntersectObserver } from "../../../utils/hooks";
import {
	ActiveNavLink,
	LandingLinkRatios
} from "../../context/ActiveLandingLinkProvider";

const SectionWithInterOb = ({ children, id, className }) => {
	const [setSectionRef, observedEl] = useIntersectObserver({
		threshold: new Array(11).fill(0).map((v, i) => i * 0.1)
	});

	const selected = useContext(ActiveNavLink);
	const ratios = useContext(LandingLinkRatios);

	useEffect(() => {
		if (
			observedEl.isIntersecting &&
			observedEl.target.id !== selected.id &&
			selected.ratio < observedEl.intersectionRatio
		) {
			// console.log(observedEl, selected);
			ratios.setActiveRatio(observedEl.target.id, observedEl.intersectionRatio);
			// links = [["linkid", ratio], ...] -> [slice out setFunction] -> [{id: "linkid", ratio: ratio}]
			const links = Object.entries(ratios)
				.slice(0, -1)
				.reduce((acc, val) => {
					const link = {
						id: val[0],
						ratio: val[1]
					};
					acc.push(link);
					return acc;
				}, []);
			// activeLink = {id: "linkid", ratio: ratio} // with hightest ratio
			const activeLink = links.reduce((acc, val) =>
				val.ratio > acc.ratio ? val : acc
			);
			selected.setActiveLink(activeLink.id, activeLink.ratio);
		} else if (
			observedEl.target &&
			!observedEl.isIntersecting &&
			ratios[observedEl.target.id] > 0
		) {
			ratios.setActiveRatio(observedEl.target.id, 0);
			if (selected.id === observedEl.target.id)
				selected.setActiveLink(observedEl.target.id, 0);
		}
	}, [
		observedEl.intersectionRatio,
		observedEl.isIntersecting,
		observedEl.target,
		ratios,
		selected
	]);

	return (
		<section ref={setSectionRef} id={id} className={className}>
			{children}
		</section>
	);
};

SectionWithInterOb.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default SectionWithInterOb;

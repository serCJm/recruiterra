import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useIntersectObserver } from "../../../utils/hooks";
import { ActiveNavLink, LandingLinkRatios } from "../../context";

const SectionWithInterOb = ({ children, id, className }) => {
  const [setSectionRef, observedEl] = useIntersectObserver({
    threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
  });

  const selected = useContext(ActiveNavLink);
  const ratios = useContext(LandingLinkRatios);

  useEffect(() => {
    if (observedEl.isIntersecting) {
      ratios.setActiveRatio(prevState => {
        return {
          ...prevState,
          [observedEl.target.id]: observedEl.intersectionRatio
        };
      });
      // links = [["linkid", ratio], ...] -> [slice setFunction] -> [{id: "linkid", ratio: ratio}]
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
      selected.setActiveLink(prevState => {
        return {
          ...prevState,
          id: activeLink.id,
          ratio: activeLink.ratio
        };
      });
    } else if (observedEl.target && !observedEl.isIntersecting) {
      ratios.setActiveRatio(prevState => {
        return {
          ...prevState,
          [observedEl.target.id]: 0
        };
      });
    }
  }, [observedEl.intersectionRatio]);

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

import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useIntersectObserver } from "../../../utils/hooks";
import { ActiveNavLink } from "../../context";

const SectionWithInterOb = ({ children, id, className }) => {
  const [setSectionRef, observedEl] = useIntersectObserver({
    threshold: new Array(11).fill(0).map((v, i) => i * 0.1)
  });

  const selected = useContext(ActiveNavLink);

  useEffect(() => {
    if (observedEl.target) {
      if (observedEl.intersectionRatio >= selected.ratio) {
        selected.setActiveLink(prevState => {
          return {
            ...prevState,
            id: observedEl.target.id,
            ratio: observedEl.intersectionRatio
          };
        });
      }
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

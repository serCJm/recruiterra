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
      // hard code active link when scrolling back from the bottom of the page
      // due to html structure, "how" section is above and not visible at the point
      // when starting to scroll back
      // thus, without this dirty hack, it does not trigger an update in active links
      // fix in future by changing html in "How" component - prob need to wrap whole section in this HOC and change its CSS to fit css grid
      if (observedEl.target.id === "contact" && !observedEl.isIntersecting) {
        selected.setActiveLink(prevState => {
          return {
            ...prevState,
            id: "how",
            ratio: 0
          };
        });
      }
      if (
        observedEl.intersectionRatio >= selected.ratio ||
        observedEl.isIntersecting
      ) {
        selected.setActiveLink(prevState => {
          return {
            ...prevState,
            id: observedEl.target.id,
            ratio: observedEl.intersectionRatio
          };
        });
      }
    }
  }, [observedEl.isIntersecting]);

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

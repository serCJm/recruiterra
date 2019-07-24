import React, { createContext } from "react";
import { connect } from "react-redux";
import { updateActiveLink, updateRatios } from "../../store/actions";
export const ActiveNavLink = createContext();
export const LandingLinkRatios = createContext();

const ActiveLandingLinkProvider = ({
  activeLink,
  ratios,
  updateActiveLink,
  updateRatios,
  children
}) => {
  return (
    <ActiveNavLink.Provider
      value={{ ...activeLink, setActiveLink: updateActiveLink }}
    >
      <LandingLinkRatios.Provider
        value={{ ...ratios, setActiveRatio: updateRatios }}
      >
        {children}
      </LandingLinkRatios.Provider>
    </ActiveNavLink.Provider>
  );
};

function mapStateToProps({ activeLink }) {
  return {
    activeLink: activeLink.activeLink,
    ratios: activeLink.ratios
  };
}

export default connect(
  mapStateToProps,
  { updateActiveLink, updateRatios }
)(ActiveLandingLinkProvider);

import React from "react";

export const ActiveNavLink = React.createContext({
  id: null,
  ratio: 0,
  setActiveLink: () => {}
});
export const LandingLinkRatios = React.createContext({
  about: 0,
  how: 0,
  contact: 0,
  setActiveRatio: () => {}
});

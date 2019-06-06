import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import classes from "./App.module.css";

import { ActiveNavLink, LandingLinkRatios } from "./context";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import JobPostNew from "./JobPostings/JobPostNew/JobPostNew";
import Footer from "./Footer/Footer";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";

const App = props => {
  const [activeLink, setActiveLink] = useState({ id: null, ratio: 0 });
  const [ratios, setActiveRatio] = useState({
    about: 0,
    how: 0,
    contact: 0
  });

  // get user auth
  useEffect(() => {
    props.fetchUser();
  }, []);

  let activeNavLinkVal = {
    id: activeLink.id,
    ratio: activeLink.ratio,
    setActiveLink
  };

  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <>
          <ActiveNavLink.Provider value={activeNavLinkVal}>
            <LandingLinkRatios.Provider value={{ ...ratios, setActiveRatio }}>
              <Header />
            </LandingLinkRatios.Provider>
          </ActiveNavLink.Provider>
          <main className={classes.main}>
            <Switch>
              <Route exact path="/">
                <ActiveNavLink.Provider value={activeNavLinkVal}>
                  <LandingLinkRatios.Provider
                    value={{ ...ratios, setActiveRatio }}
                  >
                    <Landing />
                  </LandingLinkRatios.Provider>
                </ActiveNavLink.Provider>
              </Route>
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/log-in" component={LogIn} />
              <Route exact path="/job-postings" component={Dashboard} />
              <Route path="/job-postings/new" component={JobPostNew} />
            </Switch>
          </main>
          <ActiveNavLink.Provider value={activeNavLinkVal}>
            <LandingLinkRatios.Provider value={{ ...ratios, setActiveRatio }}>
              <Footer style={classes.footer} />
            </LandingLinkRatios.Provider>
          </ActiveNavLink.Provider>
        </>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);

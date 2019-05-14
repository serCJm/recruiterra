import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import classes from "./App.module.css";

import { ActiveNavLink } from "./context";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import JobPostNew from "./JobPostings/JobPostNew/JobPostNew";
import Footer from "./Footer/Footer";

const App = props => {
  const [activeLink, setActiveLink] = useState({ id: null, ratio: 0 });

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
            <Header />
          </ActiveNavLink.Provider>

          <main className={classes.main}>
            <Switch>
              <ActiveNavLink.Provider value={activeNavLinkVal}>
                <Route exact path="/" component={Landing} />
              </ActiveNavLink.Provider>
              <Route exact path="/job-postings" component={Dashboard} />
              <Route path="/job-postings/new" component={JobPostNew} />
            </Switch>
          </main>
          <footer className={classes.footer}>
            <ActiveNavLink.Provider value={activeNavLinkVal}>
              <Footer />
            </ActiveNavLink.Provider>
          </footer>
        </>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);

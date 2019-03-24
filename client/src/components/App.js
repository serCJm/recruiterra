import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import classes from "./App.module.css";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import JobPostNew from "./JobPostings/JobPostNew/JobPostNew";

const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <>
          <header className={classes.header}>
            <Header />
          </header>
          <main className={classes.main}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/job-postings" component={Dashboard} />
              <Route path="/job-postings/new" component={JobPostNew} />
            </Switch>
          </main>
          <footer className={classes.footer}>footer</footer>
        </>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);

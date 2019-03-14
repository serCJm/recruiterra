import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./Header/Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <>
          <header>
            <Header />
          </header>
          <main className={classes.main}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/job-postings" component={Dashboard} />
              <Route path="/job-postings/new" component={SurveyNew} />
            </Switch>
          </main>
          <footer className={classes.footer}>footer</footer>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
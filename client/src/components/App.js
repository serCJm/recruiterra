import React, { useState, useEffect, useCallback, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../store/actions";
import classes from "./App.module.css";

import { ActiveNavLink, LandingLinkRatios } from "./context";

import Spinner from "./UI/Spinner/Spinner";

const Header = React.lazy(() => import("./Header/Header"));
const Landing = React.lazy(() => import("./Landing/Landing"));

const Footer = React.lazy(() => import("./Footer/Footer"));
const SignUp = React.lazy(() => import("./SignUp/SignUp"));
const LogIn = React.lazy(() => import("./LogIn/LogIn"));

const Dashboard = React.lazy(() => import("./Dashboard/Employer/Dashboard"));
const JobPostNew = React.lazy(() =>
  import("./JobPostings/JobPostNew/JobPostNew")
);
const JobPostUpdate = React.lazy(() =>
  import("./JobPostings/JobPostUpdate/JobPostUpdate")
);
const JobSeekerDashboard = React.lazy(() =>
  import("./Dashboard/JobSeeker/Dashboard")
);
const ResumeNew = React.lazy(() => import("./Resumes/ResumeNew/ResumeNew"));
const ResumeUpdate = React.lazy(() =>
  import("./Resumes/ResumeUpdate/ResumeUpdate")
);

const EmailClickResponse = React.lazy(() =>
  import("./EmailClickResponse/EmailClickResponse")
);
const ApplicantsList = React.lazy(() =>
  import("./Dashboard/Employer/ApplicantsList/ApplicantsList")
);
const ApplicantsReview = React.lazy(() =>
  import(
    "./Dashboard/Employer/ApplicantsList/ApplicantsReview/ApplicantsReview"
  )
);

const App = ({ fetchUser }) => {
  const [activeLink, setActiveLink] = useState({ id: null, ratio: 0 });
  const [ratios, setActiveRatio] = useState({
    about: 0,
    how: 0,
    contact: 0
  });

  const fetchUserHandler = useCallback(() => fetchUser(), [fetchUser]);

  // get user auth
  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  let activeNavLinkVal = {
    id: activeLink.id,
    ratio: activeLink.ratio,
    setActiveLink
  };

  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
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
              {/* Employer Routes */}
              <Route exact path="/job-postings" component={Dashboard} />
              <Route path="/job-postings/new" component={JobPostNew} />
              <Route
                exact
                path="/job-postings/update"
                render={props => <JobPostUpdate {...props} />}
              />
              <Route
                exact
                path="/job-postings/applicants"
                component={ApplicantsList}
              />
              <Route
                exact
                path="/job-postings/applicants/:id"
                component={ApplicantsReview}
              />
              {/* Job Seeker Routes */}
              <Route exact path="/my-resumes" component={JobSeekerDashboard} />
              <Route path="/resumes/new" component={ResumeNew} />
              <Route
                exact
                path="/resumes/update"
                render={props => <ResumeUpdate {...props} />}
              />
              <Route
                exact
                path="/jobs/emailresponse/:choice"
                component={EmailClickResponse}
              />
            </Switch>
          </main>
          <ActiveNavLink.Provider value={activeNavLinkVal}>
            <LandingLinkRatios.Provider value={{ ...ratios, setActiveRatio }}>
              <Footer style={classes.footer} />
            </LandingLinkRatios.Provider>
          </ActiveNavLink.Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  null,
  { fetchUser }
)(App);

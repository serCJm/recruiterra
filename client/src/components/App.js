import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../store/actions";
import classes from "./App.module.css";

import ActiveLandingLinkProvider from "./context/ActiveLandingLinkProvider";

import Spinner from "./UI/Spinner/Spinner";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Landing = React.lazy(() => import("./Landing/Landing"));

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

const App = ({ auth, fetchUser }) => {
	// get user auth
	useEffect(() => {
		async function fetchUserHandler() {
			fetchUser();
		}
		fetchUserHandler();
	}, [fetchUser]);

	return (
		<div className={classes.layout}>
			<Suspense fallback={<Spinner />}>
				<BrowserRouter>
					<ActiveLandingLinkProvider>
						<Header />
					</ActiveLandingLinkProvider>
					<main className={classes.main}>
						<Switch>
							<Route exact path="/">
								<ActiveLandingLinkProvider>
									<Landing />
								</ActiveLandingLinkProvider>
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
					<ActiveLandingLinkProvider>
						<Footer style={classes.footer} />
					</ActiveLandingLinkProvider>
				</BrowserRouter>
			</Suspense>
		</div>
	);
};

function mapStateToProps({ auth }) {
	return {
		auth
	};
}

export default connect(mapStateToProps, { fetchUser })(App);

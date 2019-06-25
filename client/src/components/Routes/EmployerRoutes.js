import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Employer/Dashboard";
import JobPostNew from "../JobPostings/JobPostNew/JobPostNew";
import JobPostUpdate from "../JobPostings/JobPostUpdate/JobPostUpdate";

const EmployerRoutes = () => {
  return (
    <>
      <Route exact path="/job-postings" component={Dashboard} />
      <Route path="/job-postings/new" component={JobPostNew} />
      <Route
        exact
        path="/job-postings/update"
        render={props => <JobPostUpdate {...props} />}
      />
    </>
  );
};

export default EmployerRoutes;

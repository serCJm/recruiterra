import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./SignUp.module.css";
import * as actions from "../../store/actions";
import Tabs from "../UI/Tabs/Tabs";
import GoogleBtn from "../UI/Btns/Google/GoogleBtn";

const tabs = ["employer", "job seeker"];

const SignUp = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // function handleSignUp(e) {
  //   console.log(e);
  //   e.preventDefault();
  //   actions.fetchUser(activeTab);
  // }
  return (
    <section className={classes.container}>
      <Tabs tabContent={tabs} activeTab={activeTab} onClick={setActiveTab} />
      <GoogleBtn type={activeTab}>Sign Up with Google</GoogleBtn>
    </section>
  );
};

export default connect(
  null,
  actions
)(SignUp);

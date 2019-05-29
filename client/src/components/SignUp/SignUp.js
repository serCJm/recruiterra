import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./SignUp.module.css";
import * as actions from "../../store/actions";
import Tabs from "../UI/Tabs/Tabs";
import GoogleBtn from "../UI/Btns/Google/GoogleBtn";
import Spinner from "../UI/Spinner/Spinner";

const tabs = ["employer", "job seeker"];

const SignUp = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [spinner, setSpinner] = useState(false);

  function handleBtnClick() {
    setSpinner(prevState => !prevState);
  }

  let content = (
    <section className={classes.container}>
      <h3>Choose Your Account Type:</h3>
      <Tabs tabContent={tabs} activeTab={activeTab} onClick={setActiveTab} />
      <GoogleBtn type={activeTab} onClick={handleBtnClick}>
        Sign Up with Google
      </GoogleBtn>
    </section>
  );

  if (spinner) content = <Spinner />;

  return <>{content}</>;
};

export default SignUp;

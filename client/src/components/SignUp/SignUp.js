import React, { useState, useEffect } from "react";
import classes from "./SignUp.module.css";
import Tabs from "../UI/Tabs/Tabs";
import GoogleBtn from "../UI/Btns/Google/GoogleBtn";
import Spinner from "../UI/Spinner/Spinner";
import DangerMsg from "../UI/DangerMsg/DangerMsg";

const tabs = ["employer", "job seeker"];

const SignUp = props => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const qs = props.location.search;
    const params = new URLSearchParams(qs);
    setError(params.get("err"));
  }, [props.location]);

  function handleBtnClick() {
    setSpinner(prevState => !prevState);
  }

  let content = (
    <section className={classes.container}>
      <DangerMsg duration={3000} onAnimDurationEnd={true}>
        {error}
      </DangerMsg>
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

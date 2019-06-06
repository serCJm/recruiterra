import React, { useState } from "react";
import classes from "./LogIn.module.css";
import GoogleBtn from "../UI/Btns/Google/GoogleBtn";
import Spinner from "../UI/Spinner/Spinner";

const LogIn = () => {
  const [spinner, setSpinner] = useState(false);

  function handleBtnClick() {
    setSpinner(prevState => !prevState);
  }

  let content = (
    <section className={classes.container}>
      <GoogleBtn onClick={handleBtnClick}>Log In with Google</GoogleBtn>
    </section>
  );

  if (spinner) content = <Spinner />;

  return <>{content}</>;
};

export default LogIn;

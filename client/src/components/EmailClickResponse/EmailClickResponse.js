import React from "react";
import PlaceholderTitle from "../UI/PlaceholderTitle/PlaceholderTitle";
import classes from "./EmailClickResponse.module.css";

const EmailClickResponse = props => {
  const message = props.match.params.choice;
  console.log(message);
  return (
    <section className={classes.container}>
      <PlaceholderTitle>
        {message === "apply"
          ? "Thank you for applying for this job. You will be contacted by the company if successful."
          : "Thank you for skipping. We hope next job suits you better."}
      </PlaceholderTitle>
    </section>
  );
};

export default EmailClickResponse;

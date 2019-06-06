import React from "react";
import PropTypes from "prop-types";
import postAJobSmall from "../../../../images/post-a-job-small.png";
import postAJobBig from "../../../../images/post-a-job-big.png";
import applySmall from "../../../../images/apply-small.png";
import applyBig from "../../../../images/apply-big.png";
import emailSmall from "../../../../images/email-small.png";
import emailBig from "../../../../images/email-big.png";
import HowSteps from "../HowSteps/HowSteps";

const contents = [
  {
    title: "Add Your Resume",
    description:
      "Submit your job resume using our simple step-by-step form. Our system will automatically notify you when relevant jobs become available.",
    image: (
      <img
        src={postAJobSmall}
        srcSet={`${postAJobSmall} 1x,
        ${postAJobBig} 2x`}
        // sizes='(min-width: 960px) 960px,
        //        100vw'
        alt="post-a-job"
      />
    )
  },
  {
    title: "Apply For Jobs",
    description:
      "You will get notified about job postings relevant to your criteria. Right from your mailbox, you can apply with a single click to the jobs that fit what you are looking for.",
    image: (
      <img
        src={applySmall}
        srcSet={`${applySmall} 1x,
        ${applyBig} 2x`}
        // sizes='(min-width: 960px) 960px,
        //        100vw'
        alt="apply"
      />
    )
  },
  {
    title: "Interview And Get Hired",
    description:
      "When employers act on your application, you will get an email notifying you about your status. If your application is successful, you will receive instructions on how to proceed with the interview.",
    image: (
      <img
        src={emailSmall}
        srcSet={`${emailSmall} 1x,
        ${emailBig} 2x`}
        // sizes='(min-width: 960px) 960px,
        //        100vw'
        alt="email"
      />
    )
  }
];

const HowJobSeekers = ({ exitAnimation }) => {
  return <HowSteps contents={contents} exitAnimation={exitAnimation} />;
};

HowJobSeekers.propTypes = {
  exitAnimation: PropTypes.bool
};

export default HowJobSeekers;

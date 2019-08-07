import React from "react";
import PropTypes from "prop-types";
import workspaceSmall from "../../../../images/workspace-small.png";
import workspaceBig from "../../../../images/workspace-big.png";
import workspaceBigWebp from "../../../../images/workspace-big.webp";
import workspaceSmallWebp from "../../../../images/workspace-small.webp";
import workspaceBigJP2 from "../../../../images/workspace-big.jp2";
import interviewSmall from "../../../../images/interview-small.png";
import interviewBig from "../../../../images/interview-big.png";
import interviewBigWebp from "../../../../images/interview-big.webp";
import interviewSmallWebp from "../../../../images/interview-small.webp";
import interviewBigJP2 from "../../../../images/interview-big.jp2";
import hireSmall from "../../../../images/hire-small.png";
import hireBig from "../../../../images/hire-big.png";
import hireBigWebp from "../../../../images/hire-big.webp";
import hireBigJP2 from "../../../../images/hire-big.jp2";
import HowSteps from "../HowSteps/HowSteps";

const contents = [
  {
    title: "Post A Job",
    description:
      "Submit your job description using our simple step-by-step form. Our system will automatically find right candidates from our database and contact them to apply. After submitting your job post, all you have to do is sip your coffee.",
    image: (
      <picture>
        <source
          type="image/webp"
          srcSet={`${workspaceSmallWebp} 1x, ${workspaceBigWebp} 2x`}
        />
        <source type="image/jp2" srcSet={workspaceBigJP2} />
        <img
          src={workspaceSmall}
          srcSet={`${workspaceSmall} 1x,
        ${workspaceBig} 2x`}
          alt="workspace"
          // sizes='(min-width: 960px) 960px,
          //        100vw'
        />
      </picture>
    )
  },
  {
    title: "Screen Candidates",
    description:
      "Candidates who matched your criteria will be notified to apply for your position. For your matches, you will be able to access resume and references to easily screen for the right hire.",
    image: (
      <picture>
        <source type="image/webp" srcSet={interviewBigWebp} />
        <source type="image/jp2" srcSet={interviewBigJP2} />
        <img
          src={interviewSmall}
          srcSet={`${interviewSmall} 1x,
        ${interviewBig} 2x`}
          alt="inverview"
          // sizes='(min-width: 960px) 960px,
          //        100vw'
        />
      </picture>
    )
  },
  {
    title: "Hire",
    description:
      "Once you are confident that a particular candiatate is the right fit for you, you mark a hire with one click. All other candidates will automatically be notifed with a rejection.",
    image: (
      <picture>
        <source type="image/webp" srcSet={hireBigWebp} />
        <source type="image/jp2" srcSet={hireBigJP2} />
        <img
          src={hireSmall}
          srcSet={`${hireSmall} 1x,
        ${hireBig} 2x`}
          alt="hire"
          // sizes='(min-width: 960px) 960px,
          //        100vw'
        />
      </picture>
    )
  }
];

const HowEmployers = ({ exitAnimation }) => {
  return <HowSteps contents={contents} exitAnimation={exitAnimation} />;
};

HowEmployers.propTypes = {
  exitAnimation: PropTypes.bool
};

export default HowEmployers;

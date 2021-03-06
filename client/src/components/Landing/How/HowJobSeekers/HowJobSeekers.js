import React from "react";
import PropTypes from "prop-types";
import postAJobSmall from "../../../../images/post-a-job-small.png";
import postAJobSmallWebp from "../../../../images/post-a-job-small.webp";
import postAJobSmallJP2 from "../../../../images/post-a-job-small.jp2";
import postAJobBig from "../../../../images/post-a-job-big.png";
import postAJobBigWebp from "../../../../images/post-a-job-big.webp";
import postAJobBigJP2 from "../../../../images/post-a-job-big.jp2";
import applySmall from "../../../../images/apply-small.png";
import applySmallWebp from "../../../../images/apply-small.webp";
import applySmallJP2 from "../../../../images/apply-small.jp2";
import applyBig from "../../../../images/apply-big.png";
import applyBigWebp from "../../../../images/apply-big.webp";
import applyBigJP2 from "../../../../images/apply-big.jp2";
import emailSmall from "../../../../images/email-small.png";
import emailSmallWebp from "../../../../images/email-small.webp";
import emailSmallJP2 from "../../../../images/email-small.jp2";
import emailBig from "../../../../images/email-big.png";
import emailBigWebp from "../../../../images/email-big.webp";
import emailBigJP2 from "../../../../images/email-big.jp2";
import HowSteps from "../HowSteps/HowSteps";

const contents = [
	{
		title: "Add Your Resume",
		description:
			"Submit your job resume using our simple step-by-step form. Our system will automatically notify you when relevant jobs become available.",
		image: (
			<picture>
				<source
					type="image/webp"
					srcSet={`${postAJobSmallWebp} 1x, ${postAJobBigWebp} 2x`}
				/>
				<source
					type="image/jp2"
					srcSet={`${postAJobSmallJP2} 1x, ${postAJobBigJP2} 2x`}
				/>
				<img
					src={postAJobSmall}
					srcSet={`${postAJobSmall} 1x,
        ${postAJobBig} 2x`}
					// sizes='(min-width: 960px) 960px,
					//        100vw'
					alt="post-a-job"
				/>
			</picture>
		)
	},
	{
		title: "Apply For Jobs",
		description:
			"You will get notified about job postings relevant to your criteria. Right from your mailbox, you can apply with a single click to the jobs that fit what you are looking for.",
		image: (
			<picture>
				<source
					type="image/webp"
					srcSet={`${applySmallWebp} 1x, ${applyBigWebp} 2x`}
				/>
				<source
					type="image/jp2"
					srcSet={`${applySmallJP2} 1x, ${applyBigJP2} 2x`}
				/>
				<img
					src={applySmall}
					srcSet={`${applySmall} 1x,
        ${applyBig} 2x`}
					// sizes='(min-width: 960px) 960px,
					//        100vw'
					alt="apply"
				/>
			</picture>
		)
	},
	{
		title: "Interview And Get Hired",
		description:
			"When employers act on your application, you will get an email notifying you about your status. If your application is successful, you will receive instructions on how to proceed with the interview.",
		image: (
			<picture>
				<source
					type="image/webp"
					srcSet={`${emailSmallWebp} 1x, ${emailBigWebp} 2x`}
				/>
				<source
					type="image/jp2"
					srcSet={`${emailSmallJP2} 1x, ${emailBigJP2} 2x`}
				/>
				<img
					src={emailSmall}
					srcSet={`${emailSmall} 1x,
        ${emailBig} 2x`}
					// sizes='(min-width: 960px) 960px,
					//        100vw'
					alt="email"
				/>
			</picture>
		)
	}
];

const HowJobSeekers = ({ exitAnimation }) => {
	return (
		<HowSteps
			contents={contents}
			exitAnimation={exitAnimation}
			data-test="how-job-seekers"
		/>
	);
};

HowJobSeekers.propTypes = {
	exitAnimation: PropTypes.bool
};

export default HowJobSeekers;

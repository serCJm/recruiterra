import React from "react";
import classes from "./ResumeNew.module.css";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import ResumeForm from "../ResumeForm/ResumeForm";
import ResumeReview from "../ResumeReview/ResumeReview";
import PlaceholderTitle from "../../UI/PlaceholderTitle/PlaceholderTitle";

export const ResumeNewUnconnected = () => {
	const [showResumeReview, setResumeReview] = React.useState(false);

	function renderContent() {
		if (showResumeReview) {
			return (
				<>
					<PlaceholderTitle data-test="placeholder-title-true">
						Please review your resume
					</PlaceholderTitle>
					<ResumeReview
						onCancel={() =>
							setResumeReview(prevShowJobPostReview => !prevShowJobPostReview)
						}
						data-test="resume-review"
					/>
				</>
			);
		}
		return (
			<>
				<PlaceholderTitle data-test="placeholder-title">
					Please Enter Your Resume Information Below
				</PlaceholderTitle>
				<ResumeForm
					onResumePostSubmit={() =>
						setResumeReview(prevShowJobPostReview => !prevShowJobPostReview)
					}
					data-test="resume-form"
				/>
			</>
		);
	}

	return (
		<section className={classes.formContainer} data-test="resume-new">
			{renderContent()}
		</section>
	);
};

export default withRouter(
	reduxForm({ form: "resumeForm" })(ResumeNewUnconnected)
);

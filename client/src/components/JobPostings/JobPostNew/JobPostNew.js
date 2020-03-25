import React from "react";
import classes from "./JobPostNew.module.css";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import JobPostForm from "../JobPostForm/JobPostForm";
import JobPostReview from "../JobPostReview/JobPostReview";
import PlaceholderTitle from "../../UI/PlaceholderTitle/PlaceholderTitle";

export const JobPostNewUnconnected = () => {
	const [showJobPostReview, setJobPostReview] = React.useState(false);

	function renderContent() {
		if (showJobPostReview) {
			return (
				<>
					<PlaceholderTitle data-test="placeholder-title-true">
						Please review your job post
					</PlaceholderTitle>
					<JobPostReview
						onCancel={() =>
							setJobPostReview(prevShowJobPostReview => !prevShowJobPostReview)
						}
						data-test="job-post-review"
					/>
				</>
			);
		}
		return (
			<>
				<PlaceholderTitle data-test="placeholder-title">
					Please Enter Your Job Post Information Below
				</PlaceholderTitle>
				<JobPostForm
					onJobPostSubmit={() =>
						setJobPostReview(prevShowJobPostReview => !prevShowJobPostReview)
					}
					data-test="job-post-form"
				/>
			</>
		);
	}

	return (
		<section className={classes.formContainer} data-test="job-post-new">
			{renderContent()}
		</section>
	);
};

export default withRouter(
	reduxForm({ form: "jobForm" })(JobPostNewUnconnected)
);

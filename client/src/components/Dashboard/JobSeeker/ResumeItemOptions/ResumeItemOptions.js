import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteResumes } from "../../../../store/actions";
import { withRouter } from "react-router-dom";
import OptionsMenu from "../../../UI/OptionsMenu/OptionsMenu";

export const ResumeItemOptionsUnconnected = ({
	status,
	resume,
	deleteResumes,
	history
}) => {
	function handleDelteResume() {
		if (
			window.confirm(
				"Are you sure you want to delete this? You won't be able to undo post deletion."
			)
		) {
			return deleteResumes(resume._id);
		}
		return;
	}

	function handleUpdateResume() {
		localStorage.setItem(
			"resumeValues",
			JSON.stringify({
				resumeName: resume.resumeName,
				fullName: resume.fullName,
				email: resume.email,
				summary: resume.summary,
				education: resume.education.join(", "),
				skills: resume.skills.join(", "),
				experience: resume.experience.join(", "),
				tags: resume.tags.join(", ")
			})
		);
		localStorage.setItem("currentResumeId", resume._id);
		return history.push("/resumes/update");
	}
	return (
		<>
			{status !== "closed" && (
				<OptionsMenu
					status={status}
					onClickDelete={handleDelteResume}
					onClickUpdate={handleUpdateResume}
					data-test="resume-item-options"
				/>
			)}
		</>
	);
};

ResumeItemOptionsUnconnected.propTypes = {
	status: PropTypes.string,
	resume: PropTypes.object,
	deleteResumes: PropTypes.func,
	history: PropTypes.object
};

export default withRouter(
	connect(null, { deleteResumes })(ResumeItemOptionsUnconnected)
);

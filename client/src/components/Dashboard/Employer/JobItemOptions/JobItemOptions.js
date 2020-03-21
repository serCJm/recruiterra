import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteJobs } from "../../../../store/actions";
import OptionsMenu from "../../../UI/OptionsMenu/OptionsMenu";

export const JobItemOptionsUnconnected = ({
	status,
	job,
	deleteJobs,
	history
}) => {
	function handleDeleteJob() {
		if (
			window.confirm(
				"Are you sure you want to delete this? You won't be able to undo post deletion."
			)
		) {
			return deleteJobs(job._id);
		}
		return;
	}

	function handleUpdateJob() {
		localStorage.setItem(
			"jobValues",
			JSON.stringify({
				name: job.name,
				title: job.title,
				description: job.description,
				skills: job.skills.join(", "),
				tags: job.tags.join(", ")
			})
		);
		localStorage.setItem("currentJobId", job._id);
		return history.push("/job-postings/update");
	}
	return (
		<>
			{status !== "closed" && (
				<OptionsMenu
					status={status}
					onClickDelete={handleDeleteJob}
					onClickUpdate={handleUpdateJob}
					data-test="job-item-options"
				/>
			)}
		</>
	);
};

JobItemOptionsUnconnected.propTypes = {
	status: PropTypes.string,
	job: PropTypes.object,
	deleteJobs: PropTypes.func,
	history: PropTypes.object
};

export default withRouter(
	connect(null, { deleteJobs })(JobItemOptionsUnconnected)
);

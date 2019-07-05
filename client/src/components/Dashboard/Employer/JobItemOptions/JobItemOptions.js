import React from "react";
import { connect } from "react-redux";
import { deleteJobs } from "../../../../store/actions";
import { withRouter } from "react-router-dom";
import OptionsMenu from "../../../UI/OptionsMenu/OptionsMenu";

const JobItemOptions = ({ status, job, deleteJobs, history }) => {
  function handleDelteJob() {
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
    console.log(job);
    localStorage.setItem(
      "jobValues",
      JSON.stringify({
        name: job.name,
        title: job.title,
        description: job.description,
        skills: job.skills.join(", "),
        tag: job.tag.join(", ")
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
          onClickDelete={handleDelteJob}
          onClickUpdate={handleUpdateJob}
        />
      )}
    </>
  );
};

export default withRouter(
  connect(
    null,
    { deleteJobs }
  )(JobItemOptions)
);

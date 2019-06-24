import React from "react";
import { connect } from "react-redux";
import RegBtn from "../Btns/RegBtn/RegBtn";
import classes from "./OptionsMenu.module.css";
import { deleteJobs } from "../../../store/actions";
import { withRouter } from "react-router-dom";

const OptionsMenu = ({ status, job, deleteJobs, history }) => {
  function handleDelteJob(jobId) {
    if (
      window.confirm(
        "Are you sure you want to delete this? You won't be able to undo post deletion."
      )
    ) {
      return deleteJobs(jobId);
    }
    return;
  }

  function handleUpdateJob(jobId) {
    console.log(job);
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
    localStorage.setItem("currentJobId", jobId);
    return history.push("/job-postings/update");
  }
  return (
    <>
      {status !== "closed" && (
        <div
          className={
            status === "closing" ? classes.containerClose : classes.container
          }
        >
          <RegBtn btnStyle="danger" onClick={() => handleDelteJob(job._id)}>
            Delete
          </RegBtn>
          <RegBtn btnStyle="success" onClick={() => handleUpdateJob(job._id)}>
            Edit
          </RegBtn>
        </div>
      )}
    </>
  );
};

export default withRouter(
  connect(
    null,
    { deleteJobs }
  )(OptionsMenu)
);

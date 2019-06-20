import React from "react";
import { connect } from "react-redux";
import RegBtn from "../Btns/RegBtn/RegBtn";
import classes from "./OptionsMenu.module.css";
import { deleteJobs, updateCurrentJobId } from "../../../store/actions";
import { withRouter } from "react-router-dom";

const OptionsMenu = ({
  status,
  job,
  deleteJobs,
  history,
  updateCurrentJobId
}) => {
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
    updateCurrentJobId(jobId);
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
    { deleteJobs, updateCurrentJobId }
  )(OptionsMenu)
);

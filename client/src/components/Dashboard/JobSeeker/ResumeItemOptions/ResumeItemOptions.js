import React from "react";
import { connect } from "react-redux";
import { deleteResumes } from "../../../../store/actions";
import { withRouter } from "react-router-dom";
import OptionsMenu from "../../../UI/OptionsMenu/OptionsMenu";

const ResumeItemOptions = ({ status, resume, deleteResumes, history }) => {
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
        tag: resume.tag.join(", ")
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
        />
      )}
    </>
  );
};

export default withRouter(
  connect(
    null,
    { deleteResumes }
  )(ResumeItemOptions)
);

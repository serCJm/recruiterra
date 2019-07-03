import React from "react";
import classes from "./StatusBtn.module.css";
import { connect } from "react-redux";
import { updateStatus } from "../../../../store/actions";

const StatusBtn = ({ status, updateStatus, id }) => {
  return (
    <button
      onClick={() => updateStatus(id)}
      className={status ? classes.active : classes.inactive}
    >
      {status ? "active" : "inactive"}
    </button>
  );
};

export default connect(
  null,
  { updateStatus }
)(StatusBtn);

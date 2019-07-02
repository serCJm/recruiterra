import React from "react";
import RegBtn from "../Btns/RegBtn/RegBtn";
import classes from "./OptionsMenu.module.css";

const OptionsMenu = ({ status, onClickDelete, onClickUpdate }) => {
  return (
    <div
      className={
        status === "closing" ? classes.containerClose : classes.container
      }
    >
      <RegBtn btnStyle="danger" onClick={() => onClickDelete()}>
        Delete
      </RegBtn>
      <RegBtn btnStyle="success" onClick={() => onClickUpdate()}>
        Edit
      </RegBtn>
    </div>
  );
};

export default OptionsMenu;

import React from "react";
import RegBtn from "../Btns/RegBtn/RegBtn";
import classes from "./OptionsMenu.module.css";

const OptionsMenu = ({ status }) => {
  return (
    <>
      {status !== "closed" && (
        <div
          className={
            status === "closing" ? classes.containerClose : classes.container
          }
        >
          <RegBtn btnStyle="danger">Delete</RegBtn>
          <RegBtn btnStyle="success">Edit</RegBtn>
        </div>
      )}
    </>
  );
};

export default OptionsMenu;

import React, { useState } from "react";
import classes from "./ResumeItem.module.css";
import PropTypes from "prop-types";
import Card from "../../../UI/Card/Card";
import ReadMoreLess from "../../../UI/ReadMoreLess/ReadMoreLess";
import DotsBtn from "../../../UI/Btns/DotsBtn/DotsBtn";
import ResumeItemOptions from "../ResumeItemOptions/ResumeItemOptions";

const ResumeItem = ({ resume }) => {
  const [showMenu, setShowMenu] = useState("closed");

  function handleMenu() {
    if (showMenu === "closed") {
      setShowMenu("opened");
    } else {
      setShowMenu("closing");
      setTimeout(() => setShowMenu("closed"), 300);
    }
  }

  return (
    <Card>
      <DotsBtn onClick={handleMenu} />
      <ResumeItemOptions status={showMenu} resume={resume} />
      <h2 className={classes.name}>{resume.name}</h2>
      <p className={classes.title}>{resume.fullName}</p>
      <ReadMoreLess text={resume.summary} length={15} />
      <p>Posted on: {new Date(resume.lastUpdated).toLocaleDateString()}</p>
    </Card>
  );
};

ResumeItem.propTypes = {
  resume: PropTypes.object
};

export default ResumeItem;

import React, { useState } from "react";
import classes from "./JobItem.module.css";
import PropTypes from "prop-types";
import Card from "../../../UI/Card/Card";
import ReadMoreLess from "../../../UI/ReadMoreLess/ReadMoreLess";
import DotsBtn from "../../../UI/Btns/DotsBtn/DotsBtn";
import OptionsMenu from "../../../UI/OptionsMenu/OptionsMenu";

const JobItem = ({ job }) => {
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
      <OptionsMenu status={showMenu} job={job} />
      <h2 className={classes.name}>{job.name}</h2>
      <p className={classes.title}>{job.title}</p>
      <ReadMoreLess text={job.description} length={15} />
      <p>Posted on: {new Date(job.lastUpdated).toLocaleDateString()}</p>
    </Card>
  );
};

JobItem.propTypes = {
  job: PropTypes.object
};

export default JobItem;

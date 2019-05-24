import React from "react";
import classes from "./Tabs.module.css";
import PropTypes from "prop-types";

const Tabs = ({ tabContent, activeTab, onClick }) => {
  return (
    <div className={classes.tabsContainer}>
      {tabContent.map(item => (
        <button
          className={activeTab === item ? classes.activeTab : classes.tab}
          onClick={() => onClick(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabContent: PropTypes.array,
  activeTab: PropTypes.string,
  onClick: PropTypes.func
};

export default Tabs;

import React, { useState } from "react";
import classes from "./How.module.css";
import HowEmployers from "./HowEmployers/HowEmployers";
import HowJobSeekers from "./HowJobSeekers/HowJobSeekers";
import SectionWithInterOb from "../../UI/SectionWithInterOb/SectionWithInterOb";

const childAnimationTime = 500;

const How = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  function handleTabSwitch(tabIndex) {
    setActiveTab(tabIndex);
    setExitAnimation(true);
    setTimeout(() => {
      setActiveContent(tabIndex);
      setExitAnimation(false);
    }, childAnimationTime);
  }
  return (
    <>
      <SectionWithInterOb id="how" className={classes.howHero}>
        <h2 className={classes.howHeroTitle}>
          How Recruiterra Makes Job Process Easy
        </h2>
      </SectionWithInterOb>
      <section className={classes.container}>
        <div className={classes.tabsContainer}>
          <button
            className={activeTab === 0 ? classes.activeTab : classes.tab}
            onClick={() => handleTabSwitch(0)}
          >
            Employers
          </button>
          <button
            className={activeTab === 1 ? classes.activeTab : classes.tab}
            onClick={() => handleTabSwitch(1)}
          >
            Job Seekers
          </button>
        </div>
        {activeContent === 0 ? (
          <HowEmployers exitAnimation={exitAnimation} />
        ) : (
          <HowJobSeekers exitAnimation={exitAnimation} />
        )}
      </section>
    </>
  );
};

export default How;

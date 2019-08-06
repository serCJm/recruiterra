import React, { useState, useRef } from "react";
import classes from "./How.module.css";
import HowEmployers from "./HowEmployers/HowEmployers";
import HowJobSeekers from "./HowJobSeekers/HowJobSeekers";
import SectionWithInterOb from "../../UI/SectionWithInterOb/SectionWithInterOb";
import Tabs from "../../UI/Tabs/Tabs";

const childAnimationTime = 500;

const tabs = ["employers", "job seekers"];

const How = () => {
  const [activeTab, setActiveTab] = useState("employers");
  const [activeContent, setActiveContent] = useState("employers");
  const [exitAnimation, setExitAnimation] = useState(false);

  const containerRef = useRef(null);

  function handleTabSwitch(tabName) {
    setActiveTab(tabName);
    setExitAnimation(true);
    containerRef.current.style.minHeight =
      containerRef.current.offsetHeight + "px";
    setTimeout(() => {
      setActiveContent(tabName);
      setExitAnimation(false);
      setTimeout(() => (containerRef.current.style.minHeight = null), 100);
    }, childAnimationTime);
  }
  return (
    <SectionWithInterOb id="how" className={classes.howSection}>
      <section className={classes.howHero}>
        <h2 className={classes.howHeroTitle}>
          How Recruiterra Makes Job Process Easy
        </h2>
      </section>
      <section className={classes.container} ref={containerRef}>
        <Tabs
          tabContent={tabs}
          activeTab={activeTab}
          onClick={handleTabSwitch}
        />
        {activeContent === "employers" ? (
          <HowEmployers exitAnimation={exitAnimation} />
        ) : (
          <HowJobSeekers exitAnimation={exitAnimation} />
        )}
      </section>
    </SectionWithInterOb>
  );
};

export default How;

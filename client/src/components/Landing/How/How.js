import React, { useState, useRef, Suspense } from "react";
import classes from "./How.module.css";
import HowEmployers from "./HowEmployers/HowEmployers";
import SectionWithInterOb from "../../UI/SectionWithInterOb/SectionWithInterOb";
import Tabs from "../../UI/Tabs/Tabs";
import Spinner from "../../UI/Spinner/Spinner";

const HowJobSeekers = React.lazy(() => import("./HowJobSeekers/HowJobSeekers"));

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
        <Suspense fallback={<Spinner />}>
          {activeContent === "employers" ? (
            <HowEmployers exitAnimation={exitAnimation} />
          ) : (
            <HowJobSeekers exitAnimation={exitAnimation} />
          )}
        </Suspense>
      </section>
    </SectionWithInterOb>
  );
};

export default How;

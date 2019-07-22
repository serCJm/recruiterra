import React, { useState, useEffect } from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  const [heroClass, setHeroClass] = useState(classes.heroJPEG);
  /* global Modernizr */

  useEffect(() => {
    if (Modernizr.webp) {
      setHeroClass(classes.heroWebP);
    } else if (Modernizr.jpeg2000) {
      setHeroClass(classes.heroJP2);
    }
  }, []);
  return (
    <section className={heroClass}>
      <h1>Post Jobs And Apply For Positions Easily With Recruiterra</h1>
      <button className={classes.btn}>Get Started</button>
    </section>
  );
};

export default Hero;

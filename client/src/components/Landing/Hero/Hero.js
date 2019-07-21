import React, { useState, useEffect } from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  const [heroClass, setHeroClass] = useState(classes.heroNoWebP);
  /* global Modernizr */

  console.log(Modernizr);

  useEffect(() => {
    if (Modernizr.webp) {
      console.log(Modernizr);
      setHeroClass(classes.heroWebP);
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

import React from 'react';
import classes from "./How.module.css";
import HowEmployers from './HowEmployers/HowEmployers';

const How = () => {
    return ( <><section className={classes.howHero}>
        <h2 className={classes.howHeroTitle}>How Recruiterra Makes Job Process Easy</h2>
    </section>
    <HowEmployers></HowEmployers>
    
    </> );
}
 
export default How;
import React, { useRef, Suspense } from "react";
import { useAnimatedUnmount } from "../../../utils/hooks";
import classes from "./How.module.css";
import HowEmployers from "./HowEmployers/HowEmployers";
import SectionWithInterOb from "../../UI/SectionWithInterOb/SectionWithInterOb";
import Tabs from "../../UI/Tabs/Tabs";
import Spinner from "../../UI/Spinner/Spinner";

const HowJobSeekers = React.lazy(() => import("./HowJobSeekers/HowJobSeekers"));

const childAnimationTime = 500;

const tabs = ["employers", "job seekers"];

const How = () => {
	const [activeTab, setActiveTab] = React.useState("employers");
	const [shouldAnim, activeContent, dispatchNewContent] = useAnimatedUnmount(
		"employers",
		childAnimationTime
	);

	const containerRef = useRef(null);

	React.useEffect(() => {
		let timeoutId;
		if (activeTab === activeContent) {
			timeoutId = setTimeout(
				() => (containerRef.current.style.minHeight = null),
				childAnimationTime + 200
			);
		} else {
			containerRef.current.style.minHeight =
				containerRef.current.offsetHeight + "px";
		}
		return () => clearTimeout(timeoutId);
	}, [activeTab, activeContent]);

	function handleTabSwitch(tabName) {
		setActiveTab(tabName);
		dispatchNewContent({ type: "updateNewContent", newContent: tabName });
	}

	return (
		<SectionWithInterOb id="how" className={classes.howSection} data-test="how">
			<section className={classes.howHero} data-test="hero">
				<h2 className={classes.howHeroTitle}>
					How Recruiterra Makes Job Process Easy
				</h2>
			</section>
			<section
				className={classes.container}
				ref={containerRef}
				data-test="content"
			>
				<Tabs
					tabContent={tabs}
					activeTab={activeTab}
					onClick={handleTabSwitch}
					data-test="tabs"
				/>
				<Suspense fallback={<Spinner />}>
					{activeContent === "employers" ? (
						<HowEmployers
							exitAnimation={shouldAnim}
							data-test="how-employers"
						/>
					) : (
						<HowJobSeekers
							exitAnimation={shouldAnim}
							data-test="how-job-seekers"
						/>
					)}
				</Suspense>
			</section>
		</SectionWithInterOb>
	);
};

export default How;

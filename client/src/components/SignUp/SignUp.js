import React from "react";
import PropTypes from "prop-types";
import classes from "./SignUp.module.css";
import Tabs from "../UI/Tabs/Tabs";
import GoogleBtn from "../UI/Btns/Google/GoogleBtn";
import Spinner from "../UI/Spinner/Spinner";
import DangerMsg from "../UI/DangerMsg/DangerMsg";

const tabs = ["employer", "job seeker"];

const SignUp = props => {
	const [activeTab, setActiveTab] = React.useState(tabs[0]);
	const [spinner, setSpinner] = React.useState(false);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		const qs = props.location.search;
		const params = new URLSearchParams(qs);
		setError(params.get("err"));
	}, [props.location]);

	function handleBtnClick() {
		setSpinner(prevState => !prevState);
	}

	let content = (
		<section className={classes.container} data-test="sign-up">
			<DangerMsg
				duration={3000}
				onAnimDurationEnd={true}
				data-test="danger-msg"
			>
				{error}
			</DangerMsg>
			<h3 data-test="heading">Choose Your Account Type:</h3>
			<Tabs
				tabContent={tabs}
				activeTab={activeTab}
				onClick={setActiveTab}
				data-test="tabs"
			/>
			<GoogleBtn
				type={activeTab}
				onClick={handleBtnClick}
				data-test="google-btn"
			>
				Sign Up with Google
			</GoogleBtn>
		</section>
	);

	if (spinner) content = <Spinner data-test="spinner" />;

	return <>{content}</>;
};

SignUp.propTypes = {
	location: PropTypes.object
};

export default SignUp;

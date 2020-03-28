import React from "react";
import classes from "./LogIn.module.css";
import GoogleBtn from "../UI/Btns/Google/GoogleBtn";
import Spinner from "../UI/Spinner/Spinner";

const LogIn = () => {
	const [spinner, setSpinner] = React.useState(false);

	function handleBtnClick() {
		setSpinner(prevState => !prevState);
	}

	let content = (
		<section className={classes.container} data-test="login">
			<GoogleBtn onClick={handleBtnClick} data-test="login-btn">
				Log In with Google
			</GoogleBtn>
		</section>
	);

	if (spinner) content = <Spinner data-test="spinner" />;

	return <>{content}</>;
};

export default LogIn;

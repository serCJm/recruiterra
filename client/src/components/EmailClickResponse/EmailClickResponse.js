import React from "react";
import PropTypes from "prop-types";
import PlaceholderTitle from "../UI/PlaceholderTitle/PlaceholderTitle";
import classes from "./EmailClickResponse.module.css";

const EmailClickResponse = props => {
	const message = props.match.params.choice;
	return (
		<section className={classes.container} data-test="email-click-response">
			<PlaceholderTitle data-test="message">
				{message === "apply"
					? "Thank you for applying for this job. You will be contacted by the company if successful."
					: "Thank you for skipping. We hope next job suits you better."}
			</PlaceholderTitle>
		</section>
	);
};

EmailClickResponse.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			match: PropTypes.string
		})
	})
};

export default EmailClickResponse;

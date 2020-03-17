import React, { useState, useCallback } from "react";
import classes from "./ReadMoreLess.module.css";
import PropTypes from "prop-types";
import RegBtn from "../Btns/RegBtn/RegBtn";

const ReadMoreLess = ({ text, length = 10 }) => {
	const [showMore, setShowMore] = useState(false);
	const [moreLessHeight, setMoreLessHeight] = useState(0);

	const moreLessRef = useCallback(node => {
		if (node !== null) {
			setMoreLessHeight(node.scrollHeight);
		}
	}, []);

	function renderContent() {
		const textArr = text.split(" ");
		if (textArr.length > length) {
			return (
				<>
					{textArr.slice(0, length).join(" ")}
					{showMore ? null : <span data-test="ellipsis">...</span>}
					<span
						ref={moreLessRef}
						className={classes.moreLessText}
						style={{ maxHeight: showMore ? moreLessHeight + "px" : 0 }}
						data-test="hidden-text"
					>
						{textArr.slice(length, textArr.length).join(" ")}
					</span>
					{showMore ? (
						<RegBtn
							btnStyle="danger"
							onClick={() => setShowMore(false)}
							data-test="show-less"
						>
							Read Less
						</RegBtn>
					) : (
						<RegBtn
							btnStyle="success"
							onClick={() => setShowMore(true)}
							data-test="show-more"
						>
							Read More
						</RegBtn>
					)}
				</>
			);
		}
		return text;
	}
	return (
		<p className={classes.text} data-test="read-more-less">
			{renderContent()}
		</p>
	);
};

ReadMoreLess.propTypes = {
	text: PropTypes.string.isRequired,
	length: PropTypes.number
};

export default ReadMoreLess;

import React, { useState, useEffect } from "react";
import classes from "./DangerMsg.module.css";
import PropTypes from "prop-types";

const DangerMsg = ({ duration, onAnimDurationEnd, children }) => {
	const [isVisible, setVisible] = useState(false);
	const [sectionClass, setSectionClass] = useState(classes.container);

	function handleAnimation() {
		setSectionClass(classes.containerAnimated);
		let timer = setTimeout(() => {
			setVisible(false);
		}, 300);
		return clearTimeout(timer);
	}

	useEffect(() => {
		let timer1;
		let timer2;
		function animate() {
			if (onAnimDurationEnd) {
				setSectionClass(classes.containerAnimated);
				timer2 = setTimeout(() => {
					setVisible(false);
				}, 300);
			} else {
				setVisible(false);
			}
		}

		if (children) {
			setVisible(true);
		}
		if (duration) {
			timer1 = setTimeout(() => {
				animate();
			}, duration);
		}
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, [children, duration, onAnimDurationEnd]);

	return (
		<>
			{isVisible ? (
				<section className={sectionClass} data-test="danger-msg">
					<div className={classes.inner}>
						{children}
						<button
							className={classes.btn}
							onClick={handleAnimation}
							data-test="btn"
							type="button"
						>
							&times;
						</button>
					</div>
				</section>
			) : null}
		</>
	);
};

DangerMsg.propTypes = {
	duration: PropTypes.number,
	onAnimDurationEnd: PropTypes.bool,
	children: PropTypes.node
};

export default DangerMsg;

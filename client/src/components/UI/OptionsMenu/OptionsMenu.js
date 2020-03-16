import React from "react";
import RegBtn from "../Btns/RegBtn/RegBtn";
import classes from "./OptionsMenu.module.css";
import PropTypes from "prop-types";

const OptionsMenu = ({ status, onClickDelete, onClickUpdate }) => {
	return (
		<div
			className={
				status === "closing" ? classes.containerClose : classes.container
			}
			data-test="options-menu"
		>
			<RegBtn
				btnStyle="danger"
				onClick={() => onClickDelete()}
				data-test="danger-btn"
			>
				Delete
			</RegBtn>
			<RegBtn
				btnStyle="success"
				onClick={() => onClickUpdate()}
				data-test="success-btn"
			>
				Edit
			</RegBtn>
		</div>
	);
};

OptionsMenu.propTypes = {
	status: PropTypes.string,
	onClickDelete: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default OptionsMenu;

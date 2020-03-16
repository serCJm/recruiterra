import React from "react";
import { shallow } from "enzyme";
import OptionsMenu from "./OptionsMenu";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import classes from "./OptionsMenu.module.css";

const setup = (props = {}) => {
	return shallow(<OptionsMenu {...props}></OptionsMenu>);
};

describe("<OptionsMenu/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "options-menu");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw warning", () => {
		checkProps(component, {
			status: "test",
			onClickDelete: jest.fn(),
			onClickDelete: jest.fn()
		});
	});
	it("should run on click", () => {
		const mock = jest.fn();
		component.setProps({
			onClickDelete: mock
		});
		const btn = findByTestAttr(component, "danger-btn");
		btn.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
	it("should run on click", () => {
		const mock = jest.fn();
		component.setProps({
			onClickUpdate: mock
		});
		const btn = findByTestAttr(component, "success-btn");
		btn.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
	it("should update className on prop", () => {
		component.setProps({ status: "closing" });
		const wrapper1 = findByTestAttr(component, "options-menu");
		expect(wrapper1.hasClass(classes.containerClose)).toBe(true);
		component.setProps({ status: "" });
		const wrapper2 = findByTestAttr(component, "options-menu");
		expect(wrapper2.hasClass(classes.container)).toBe(true);
	});
});

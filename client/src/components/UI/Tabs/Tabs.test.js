import React from "react";
import { shallow } from "enzyme";
import Tabs from "./Tabs";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import classes from "./Tabs.module.css";

const setup = (props = {}) => {
	return shallow(<Tabs {...props}></Tabs>);
};

describe("<Tabs/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			tabContent: ["tab1", "tab2"],
			activeTab: "tab1",
			onClick: jest.fn()
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "tabs");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(component, {
			tabContent: ["tab1", "tab2"],
			activeTab: "tab1",
			onClick: jest.fn()
		});
	});
	it("should render active class link", () => {
		const wrapper = findByTestAttr(component, "tab1");
		expect(wrapper.hasClass(classes.activeTab)).toBe(true);
	});
	it("should update tab on click", () => {
		const mock = jest.fn();
		component.setProps({ onClick: mock });
		const wrapper = findByTestAttr(component, "tab1");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalledWith("tab1");
	});
});

import React from "react";
import { shallow } from "enzyme";
import DrawerToggle from "./DrawerToggle";
import classes from "./DrawerToggle.module.css";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<DrawerToggle {...props}></DrawerToggle>);
};

describe("<DrawerToggle/>", () => {
	let component;
	const mock = jest.fn();
	beforeEach(() => {
		component = setup({
			isOpen: true,
			onClick: mock
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "drawer-toggle");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning", () => {
		checkProps(DrawerToggle, { isOpen: true, onClick: jest.fn() });
	});
	it("should call prop fn on click", () => {
		const wrapper = findByTestAttr(component, "drawer-toggle");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
	it("should set class to active", () => {
		const wrapper = findByTestAttr(component, "drawer-toggle");
		expect(wrapper.hasClass(classes.active)).toBe(true);
	});
	it("should set class to menu", () => {
		component.setProps({
			isOpen: false
		});
		const wrapper = findByTestAttr(component, "drawer-toggle");
		expect(wrapper.hasClass(classes.menu)).toBe(true);
	});
});

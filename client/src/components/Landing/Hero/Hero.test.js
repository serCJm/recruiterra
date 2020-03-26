import React from "react";
import { shallow } from "enzyme";
import Hero from "./Hero";
import classes from "./Hero.module.css";
import { findByTestAttr } from "../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<Hero {...props}></Hero>);
};

describe("<Hero/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "hero");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a title", () => {
		const wrapper = findByTestAttr(component, "title");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a link", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper.prop("to")).toBe("/sign-up");
	});
	it("should set background to webp", () => {
		global.Modernizr = { webp: true };
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => ["class", mock]);
		component.setProps({});
		expect(mock).toHaveBeenCalledWith(classes.heroWebP);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
	it("should set background to jpeg2000", () => {
		global.Modernizr = { jpeg2000: true };
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => ["class", mock]);
		component.setProps({});
		expect(mock).toHaveBeenCalledWith(classes.heroJP2);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
});

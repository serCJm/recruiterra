import React from "react";
import { shallow } from "enzyme";
import { FooterUnconnected } from "./Footer";
import classes from "./Footer.module.css";
import { findByTestAttr, checkProps } from "../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<FooterUnconnected {...props}></FooterUnconnected>);
};

describe("<FooterUnconnected/>", () => {
	let component;
	beforeEach(() => {
		component = setup({ location: { pathname: "/" } });
	});
	it("should render at '/' home location", () => {
		const wrapper = findByTestAttr(component, "footer");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT render other locations", () => {
		component.setProps({ location: { pathname: "/test" } });
		const wrapper = findByTestAttr(component, "footer");
		expect(wrapper).toHaveLength(0);
	});
	it("should NOT display a warning", () => {
		checkProps(FooterUnconnected, { style: "test" });
	});
	it("should render an observer component", () => {
		const wrapper = findByTestAttr(component, "observer");
		expect(wrapper).toHaveLength(1);
	});
	it("should render address section", () => {
		const wrapper = findByTestAttr(component, "address");
		expect(wrapper).toHaveLength(1);
	});
	it("should render copyright section", () => {
		const wrapper = findByTestAttr(component, "copyright");
		expect(wrapper).toHaveLength(1);
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
		expect(mock).toHaveBeenCalled();
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
		expect(mock).toHaveBeenCalledWith(classes.locationWebP);
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
		expect(mock).toHaveBeenCalledWith(classes.locationJP2);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
});

import React from "react";
import { shallow } from "enzyme";
import { HeaderUnconnected } from "./Header";
import classes from "./Header.module.css";
import { findByTestAttr, checkProps } from "../../utils/helpers";
import * as hooks from "../../utils/hooks";

const setup = (props = {}) =>
	shallow(<HeaderUnconnected {...props}></HeaderUnconnected>);

describe("<HeaderUnconnected/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			location: {
				pathname: "/"
			}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "header");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(HeaderUnconnected, {
			location: {}
		});
	});
	it("should render Navigation component", () => {
		const wrapper = findByTestAttr(component, "navigation");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a pixel anchor", () => {
		const wrapper = findByTestAttr(component, "anchor");
		expect(wrapper).toHaveLength(1);
	});
	it("should have landing class", () => {
		const wrapper = findByTestAttr(component, "header");
		expect(wrapper.hasClass(classes.headerLanding)).toBe(true);
	});
	it("should have header class", () => {
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [false, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "header");
		expect(wrapper.hasClass(classes.header)).toBe(true);
		React.useState.mockRestore();
	});
	it("should set landing state to true", () => {
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, mock]);
		component.setProps({});
		expect(mock).toHaveBeenCalledWith(true);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
	it("should set transparent state to false", () => {
		jest.spyOn(hooks, "useIntersectObserver").mockReturnValueOnce([
			"ref",
			{
				target: true,
				isIntersecting: false
			}
		]);
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, mock]);
		component.setProps({});
		expect(mock).toHaveBeenNthCalledWith(2, false);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
	it("should set transparent state to true", () => {
		jest.spyOn(hooks, "useIntersectObserver").mockReturnValueOnce([
			"ref",
			{
				target: true,
				isIntersecting: true
			}
		]);
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, mock]);
		component.setProps({});
		expect(mock).toHaveBeenNthCalledWith(2, true);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
	it("should set transparent state and landing state to false", () => {
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, mock]);
		component.setProps({
			location: {
				pathname: ""
			}
		});
		expect(mock).toHaveBeenNthCalledWith(1, false);
		expect(mock).toHaveBeenNthCalledWith(2, false);
		React.useEffect.mockRestore();
		React.useState.mockRestore();
	});
});

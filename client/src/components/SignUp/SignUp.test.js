import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";
import { findByTestAttr, checkProps } from "../../utils/helpers";

const setup = (props = {}) => shallow(<SignUp {...props}></SignUp>);

describe("<SignUp/>", () => {
	let component;
	beforeEach(() => {
		component = setup({ location: {} });
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "sign-up");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning", () => {
		checkProps(SignUp, { location: {} });
	});
	it("should render <DangerMsg/>", () => {
		const wrapper = findByTestAttr(component, "danger-msg");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a heading", () => {
		const wrapper = findByTestAttr(component, "heading");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <Tabs/>", () => {
		const wrapper = findByTestAttr(component, "tabs");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <GoogleBtn/>", () => {
		const wrapper = findByTestAttr(component, "google-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a <Spinner/>", () => {
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementationOnce(() => ["employer", jest.fn()])
			.mockImplementationOnce(() => [true, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "spinner");
		expect(wrapper).toHaveLength(1);
	});
	it("should update state on click", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementationOnce(() => ["employer", jest.fn()])
			.mockImplementationOnce(() => [false, mock]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "google-btn");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
	it("should update state on click", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementationOnce(() => ["employer", mock])
			.mockImplementationOnce(() => [false, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "tabs");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
});

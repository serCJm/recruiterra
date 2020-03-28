import React from "react";
import { shallow } from "enzyme";
import How from "./How";
import { findByTestAttr } from "../../../utils/helpers";
import * as hooks from "../../../utils/hooks";

const setup = (props = {}) => shallow(<How {...props}></How>);

describe("<How/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "how");
		expect(wrapper).toHaveLength(1);
	});
	it("should render hero section", () => {
		const wrapper = findByTestAttr(component, "hero");
		expect(wrapper).toHaveLength(1);
	});
	it("should render content section", () => {
		const wrapper = findByTestAttr(component, "content");
		expect(wrapper).toHaveLength(1);
	});
	it("should render tabs component", () => {
		const wrapper = findByTestAttr(component, "tabs");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <HowEmployers/> component", () => {
		jest
			.spyOn(hooks, "useAnimatedUnmount")
			.mockReturnValueOnce([true, "employers", jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "how-employers");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <HowJobSeekers/> component", () => {
		jest
			.spyOn(hooks, "useAnimatedUnmount")
			.mockReturnValueOnce([true, "job-seekers", jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "how-job-seekers");
		expect(wrapper).toHaveLength(1);
	});
	it("should update state on click", () => {
		const mock1 = jest.fn();
		const mock2 = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementationOnce(() => ["employers", mock1]);
		jest
			.spyOn(hooks, "useAnimatedUnmount")
			.mockReturnValueOnce([true, "employers", mock2]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "tabs");
		wrapper.simulate("click");
		expect(mock1).toHaveBeenCalled();
		expect(mock2).toHaveBeenCalled();
	});
	it("should pass through exitAnimation prop to <HowEmployers/>", () => {
		const exitAnimation = true;
		jest
			.spyOn(hooks, "useAnimatedUnmount")
			.mockReturnValueOnce([exitAnimation, "employers", jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "how-employers");
		expect(wrapper.prop("exitAnimation")).toBe(exitAnimation);
	});
	it("should pass through exitAnimation prop to <HowJobSeekers/>", () => {
		const exitAnimation = true;
		jest
			.spyOn(hooks, "useAnimatedUnmount")
			.mockReturnValueOnce([exitAnimation, "job-seekers", jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "how-job-seekers");
		expect(wrapper.prop("exitAnimation")).toBe(exitAnimation);
	});
});

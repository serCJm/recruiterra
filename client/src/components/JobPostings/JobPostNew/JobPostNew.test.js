import React from "react";
import { shallow } from "enzyme";
import { JobPostNewUnconnected } from "./JobPostNew";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import formFields from "../formFields";

const setup = (props = {}) =>
	shallow(<JobPostNewUnconnected {...props}></JobPostNewUnconnected>);

describe("<JobPostNewUnconnected/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-post-new");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <PlaceholderTitle/> when state is false", () => {
		const wrapper = findByTestAttr(component, "placeholder-title");
		expect(wrapper).toHaveLength(1);
	});
	it("should render correct <PlaceholderTitle/> text", () => {
		const content = "Please Enter Your Job Post Information Below";
		const wrapper = findByTestAttr(component, "placeholder-title");
		expect(wrapper.render().text()).toBe(content);
	});
	it("should render <JobPostForm/> when state is false", () => {
		const wrapper = findByTestAttr(component, "job-post-form");
		expect(wrapper).toHaveLength(1);
	});
	it("should run state update callback", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [false, mock]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "job-post-form");
		wrapper.prop("onJobPostSubmit")();
		expect(mock).toHaveBeenCalled();
	});
	it("should render <PlaceholderTitle/> when state is true", () => {
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "placeholder-title-true");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <JobPostReview/> when state is true", () => {
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "job-post-review");
		expect(wrapper).toHaveLength(1);
	});
	it("should run state update callback", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, mock]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "job-post-review");
		wrapper.prop("onCancel")();
		expect(mock).toHaveBeenCalled();
	});
});

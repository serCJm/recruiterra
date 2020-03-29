import React from "react";
import { shallow } from "enzyme";
import { ResumeNewUnconnected } from "./ResumeNew";
import { findByTestAttr } from "../../../utils/helpers";

const setup = (props = {}) =>
	shallow(<ResumeNewUnconnected {...props}></ResumeNewUnconnected>);

describe("<ResumeNewUnconnected/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "resume-new");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <PlaceholderTitle/> when state is false", () => {
		const wrapper = findByTestAttr(component, "placeholder-title");
		expect(wrapper).toHaveLength(1);
	});
	it("should render correct <PlaceholderTitle/> text", () => {
		const content = "Please Enter Your Resume Information Below";
		const wrapper = findByTestAttr(component, "placeholder-title");
		expect(wrapper.render().text()).toBe(content);
	});
	it("should render <ResumeForm/> when state is false", () => {
		const wrapper = findByTestAttr(component, "resume-form");
		expect(wrapper).toHaveLength(1);
	});
	it("should run state update callback", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [false, mock]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "resume-form");
		wrapper.prop("onResumePostSubmit")();
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
	it("should render <ResumeReview/> when state is true", () => {
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "resume-review");
		expect(wrapper).toHaveLength(1);
	});
	it("should run state update callback", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => [true, mock]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "resume-review");
		wrapper.prop("onCancel")();
		expect(mock).toHaveBeenCalled();
	});
});

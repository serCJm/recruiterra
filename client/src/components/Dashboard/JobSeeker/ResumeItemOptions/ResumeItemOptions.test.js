import React from "react";
import { shallow } from "enzyme";
import { ResumeItemOptionsUnconnected } from "./ResumeItemOptions";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(
		<ResumeItemOptionsUnconnected {...props}></ResumeItemOptionsUnconnected>
	);
};

describe("<ResumeItemOptions/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			status: "open",
			resume: {
				resumeName: "test",
				fullName: "test",
				email: "email",
				summary: "summary",
				education: [],
				skills: [],
				experience: [],
				tags: []
			},
			deleteResumes: jest.fn(),
			history: {}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "resume-item-options");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning", () => {
		checkProps(ResumeItemOptionsUnconnected, {
			status: "open",
			resume: {},
			deleteResumes: jest.fn(),
			history: {}
		});
	});
	it("should display a confirmation field", () => {
		window.confirm = jest.fn();
		const wrapper = findByTestAttr(component, "resume-item-options");
		wrapper.prop("onClickDelete")();
		expect(window.confirm).toHaveBeenCalled();
	});
	it("should redirect on update", () => {
		const mock = jest.fn();
		component.setProps({
			history: {
				push: mock
			}
		});
		const wrapper = findByTestAttr(component, "resume-item-options");
		wrapper.prop("onClickUpdate")();
		expect(mock).toHaveBeenCalled();
	});
});

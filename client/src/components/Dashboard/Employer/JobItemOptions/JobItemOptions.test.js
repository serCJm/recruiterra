import React from "react";
import { shallow } from "enzyme";
import { JobItemOptionsUnconnected } from "./JobItemOptions";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(
		<JobItemOptionsUnconnected {...props}></JobItemOptionsUnconnected>
	);
};

describe("<JobItemOptions/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			status: "open",
			job: {
				name: "test",
				title: "title",
				description: "desc",
				skills: [],
				tags: []
			},
			deleteJobs: jest.fn(),
			history: {}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-item-options");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning", () => {
		checkProps(component, {
			status: "open",
			job: {},
			deleteJobs: jest.fn(),
			history: {}
		});
	});
	it("should display a confirmation field", () => {
		window.confirm = jest.fn();
		const wrapper = findByTestAttr(component, "job-item-options");
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
		const wrapper = findByTestAttr(component, "job-item-options");
		wrapper.prop("onClickUpdate")();
		expect(mock).toHaveBeenCalled();
	});
});

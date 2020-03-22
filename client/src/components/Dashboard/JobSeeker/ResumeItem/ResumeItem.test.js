import React from "react";
import { shallow } from "enzyme";
import ResumeItem from "./ResumeItem";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<ResumeItem {...props}></ResumeItem>);
};

describe("<ResumeItem/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			resume: {
				_id: "test-id",
				status: "test",
				name: "test name",
				title: "test title",
				summary: "test desc",
				lastUpdated: "2020-03-15"
			}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "resume-item");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(component, {
			resume: {}
		});
	});
	it("should render status button", () => {
		const wrapper = findByTestAttr(component, "status-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should render dots button", () => {
		const wrapper = findByTestAttr(component, "dots-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should render resume options", () => {
		const wrapper = findByTestAttr(component, "resume-options");
		expect(wrapper).toHaveLength(1);
	});
	it("should render resume name", () => {
		const wrapper = findByTestAttr(component, "resume-name");
		expect(wrapper).toHaveLength(1);
	});
	it("should render full name", () => {
		const wrapper = findByTestAttr(component, "resume-fullName");
		expect(wrapper).toHaveLength(1);
	});
	it("should render resume summary", () => {
		const wrapper = findByTestAttr(component, "resume-summary");
		expect(wrapper).toHaveLength(1);
	});
	it("should render resume date", () => {
		const wrapper = findByTestAttr(component, "resume-date");
		expect(wrapper).toHaveLength(1);
	});
	it("should set state to open on click", () => {
		const mock = jest.fn(() => "opened");
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => ["closed", mock]);
		//rerender component to update useState implementation
		component.setProps({});
		const btn = findByTestAttr(component, "dots-btn");
		btn.simulate("click");
		expect(mock).toHaveBeenCalledWith("opened");
		React.useState.mockRestore();
	});
	it("should set state to open on click", () => {
		jest.useFakeTimers();
		const mock = jest
			.fn()
			.mockReturnValueOnce("closing")
			.mockReturnValueOnce("closed");
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => ["opened", mock]);
		//rerender component to update useState implementation
		component.setProps({});
		const btn = findByTestAttr(component, "dots-btn");
		btn.simulate("click");
		expect(mock).toHaveBeenNthCalledWith(1, "closing");
		jest.advanceTimersByTime(300);
		expect(mock).toHaveBeenNthCalledWith(2, "closed");
		React.useState.mockRestore();
	});
});

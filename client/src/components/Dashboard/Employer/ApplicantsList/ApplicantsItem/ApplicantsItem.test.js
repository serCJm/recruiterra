import React from "react";
import { shallow } from "enzyme";
import ApplicantsItem from "./ApplicantsItem";
import { findByTestAttr, checkProps } from "../../../../../utils/helpers";

const setup = (props = {}) =>
	shallow(<ApplicantsItem {...props}></ApplicantsItem>);

describe("<ApplicantsItem/>", () => {
	let component;
	const resume = {
		_id: "id",
		fullName: "Test test",
		email: "test@test.com",
		summary: "lorem impsum",
		lastUpdated: "12-10-2020"
	};
	beforeEach(() => {
		component = setup({
			resume
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "applicants-item");
		expect(wrapper).toHaveLength(1);
	});
	it("should not throw a warning", () => {
		checkProps(component, {
			resume: {
				_id: "id",
				fullName: "Test test",
				email: "test@test.com",
				summary: "lorem impsum",
				lastUpdated: "12-10-2020"
			}
		});
	});
	it("should render a link", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper).toHaveLength(1);
	});
	it("should should render correct path", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper.prop("to").pathname).toBe("/job-postings/applicants/id");
	});
	it("should should render correct path", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper.prop("to").pathname).toBe("/job-postings/applicants/id");
	});
	it("should render a name", () => {
		const wrapper = findByTestAttr(component, "name");
		expect(wrapper).toHaveLength(1);
		expect(wrapper.text()).toBe(resume.fullName);
	});
	it("should render email", () => {
		const wrapper = findByTestAttr(component, "email");
		expect(wrapper).toHaveLength(1);
		expect(wrapper.text()).toBe(resume.email);
	});
	it("should render read more less component", () => {
		const wrapper = findByTestAttr(component, "read-more");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a date", () => {
		const wrapper = findByTestAttr(component, "date");
		expect(wrapper).toHaveLength(1);
	});
});

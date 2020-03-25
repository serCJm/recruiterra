import React from "react";
import { shallow } from "enzyme";
import { JobPostFormUnconnected } from "./JobPostForm";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import formFields from "../formFields";

const setup = (props = {}) =>
	shallow(<JobPostFormUnconnected {...props}></JobPostFormUnconnected>);

describe("<JobPostFormUnconnected/>", () => {
	let component;
	const mock1 = jest.fn();
	const mock2 = jest.fn();
	beforeEach(() => {
		component = setup({
			handleSubmit: mock1,
			onJobPostSubmit: mock2
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-post-form");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(JobPostFormUnconnected, {
			handleSubmit: mock1,
			onJobPostSubmit: mock2
		});
	});
	it("should call prop functions on submit", () => {
		const wrapper = findByTestAttr(component, "job-post-form");
		wrapper.simulate("submit");
		expect(mock1).toHaveBeenCalledWith(mock2);
	});
	it("should render link btn", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper).toHaveLength(1);
	});
	it("should link to job postings", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper.prop("to")).toBe("/job-postings");
	});
	it("should render cancel btn", () => {
		const wrapper = findByTestAttr(component, "btn-cancel");
		expect(wrapper).toHaveLength(1);
	});
	it("should render next btn", () => {
		const wrapper = findByTestAttr(component, "btn-next");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <Field/> for every formFields", () => {
		formFields.forEach(field => {
			const wrapper = findByTestAttr(component, `field-${field.name}`);
			expect(wrapper).toHaveLength(1);
		});
	});
});

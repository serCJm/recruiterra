import React from "react";
import { shallow } from "enzyme";
import { JobPostUpdateUnconnected } from "./JobPostUpdate";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import formFields from "../formFields";

const setup = (props = {}) =>
	shallow(<JobPostUpdateUnconnected {...props}></JobPostUpdateUnconnected>);

describe("<JobPostUpdateUnconnected/>", () => {
	let component;
	const mock1 = jest.fn();
	const mock2 = jest.fn();
	beforeEach(() => {
		component = setup({
			currentJobId: "test",
			handleSubmit: mock1,
			updateJobPost: mock2,
			history: {}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-post-update");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(JobPostUpdateUnconnected, {
			handleSubmit: mock1,
			updateJobPost: mock2,
			currentJobId: "test"
		});
	});
	it("should call prop functions on submit", () => {
		const wrapper = findByTestAttr(component, "job-post-form");
		wrapper.simulate("submit");
		expect(mock1).toHaveBeenCalled();
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
	it("should render update btn", () => {
		const wrapper = findByTestAttr(component, "btn-update");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <Field/> for every formFields", () => {
		formFields.forEach(field => {
			const wrapper = findByTestAttr(component, `field-${field.name}`);
			expect(wrapper).toHaveLength(1);
		});
	});
});

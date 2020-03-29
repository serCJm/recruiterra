import React from "react";
import { shallow } from "enzyme";
import { ResumeFormUnconnected } from "./ResumeForm";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import formFields from "../formFields";

const setup = (props = {}) =>
	shallow(<ResumeFormUnconnected {...props}></ResumeFormUnconnected>);

describe("<ResumeFormUnconnected/>", () => {
	let component;
	const mock1 = jest.fn();
	const mock2 = jest.fn();
	beforeEach(() => {
		component = setup({
			handleSubmit: mock1,
			onResumePostSubmit: mock2
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "resume-post-form");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(ResumeFormUnconnected, {
			handleSubmit: mock1,
			onResumePostSubmit: mock2
		});
	});
	it("should call prop functions on submit", () => {
		const wrapper = findByTestAttr(component, "resume-post-form");
		wrapper.simulate("submit");
		expect(mock1).toHaveBeenCalledWith(mock2);
	});
	it("should render link btn", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper).toHaveLength(1);
	});
	it("should link to resume postings", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper.prop("to")).toBe("/my-resumes");
	});
	it("should render cancel button", () => {
		const wrapper = findByTestAttr(component, "btn-cancel");
		expect(wrapper).toHaveLength(1);
	});
	it("should render next button", () => {
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

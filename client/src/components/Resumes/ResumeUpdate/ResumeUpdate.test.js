import React from "react";
import { shallow } from "enzyme";
import { ResumeUpdateUnconnected } from "./ResumeUpdate";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import formFields from "../formFields";

const setup = (props = {}) =>
	shallow(<ResumeUpdateUnconnected {...props}></ResumeUpdateUnconnected>);

describe("<ResumeUpdateUnconnected/>", () => {
	let component;
	const mock1 = jest.fn();
	const mock2 = jest.fn();
	beforeEach(() => {
		component = setup({
			currentJobId: "test",
			handleSubmit: mock1,
			updateResumes: mock2,
			history: {}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "resume-update");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(ResumeUpdateUnconnected, {
			handleSubmit: mock1,
			updateJobPost: mock2,
			currentJobId: "test"
		});
	});
	it("should call prop functions on submit", () => {
		const wrapper = findByTestAttr(component, "resume-form");
		wrapper.simulate("submit");
		expect(mock1).toHaveBeenCalled();
	});
	it("should render link btn", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper).toHaveLength(1);
	});
	it("should link to resume postings", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper.prop("to")).toBe("/my-resumes");
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

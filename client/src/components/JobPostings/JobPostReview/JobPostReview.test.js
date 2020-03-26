import React from "react";
import { shallow } from "enzyme";
import { JobPostReviewUnconnected } from "./JobPostReview";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import formFields from "../formFields";

const setup = (props = {}) =>
	shallow(<JobPostReviewUnconnected {...props}></JobPostReviewUnconnected>);

describe("<JobPostReviewUnconnected/>", () => {
	let component;
	const mock1 = jest.fn();
	const mock2 = jest.fn();
	const mock3 = jest.fn();
	const formValues = {
		name: "test",
		title: "test title",
		description: "test desc",
		skills: "test skills",
		tags: "test tags"
	};
	beforeEach(() => {
		component = setup({
			onCancel: mock1,
			formValues,
			submitJobPost: mock2,
			history: { push: mock3 }
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-post-review");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(JobPostReviewUnconnected, {
			onCancel: mock1,
			formValues,
			submitJobPost: mock2,
			history: { push: mock3 }
		});
	});
	it("should render submit btn", () => {
		const wrapper = findByTestAttr(component, "success");
		expect(wrapper).toHaveLength(1);
	});
	it("should call submitJobPost function on click", async () => {
		const wrapper = findByTestAttr(component, "success");
		wrapper.simulate("click", { preventDefault() {} });
		await expect(mock2).toHaveBeenCalledWith(formValues);
		expect(mock3).toHaveBeenCalledWith("/job-postings");
	});
	it("should render cancel btn", () => {
		const wrapper = findByTestAttr(component, "danger");
		expect(wrapper).toHaveLength(1);
	});
	it("should call onCancel function on click", () => {
		const wrapper = findByTestAttr(component, "danger");
		wrapper.simulate("click");
		expect(mock1).toHaveBeenCalled();
	});
	it("should render form field for every item in formFields", () => {
		formFields.forEach(field => {
			const wrapper = findByTestAttr(component, `field-${field.name}`);
			expect(wrapper).toHaveLength(1);
		});
	});
});

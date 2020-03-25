import React from "react";
import { shallow } from "enzyme";
import JobField from "./JobField";
import { findByTestAttr, checkProps } from "../../../utils/helpers";

const setup = (props = {}) => shallow(<JobField {...props}></JobField>);

describe("<JobField/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			input: {
				name: "test"
			},
			meta: {
				error: null,
				touched: null
			}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-field");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(JobField, {
			label: "test",
			input: {
				name: "test"
			},
			meta: {
				error: null,
				touched: null
			}
		});
	});
	it("should render input field", () => {
		const wrapper = findByTestAttr(component, "input");
		expect(wrapper).toHaveLength(1);
	});
	it("should render textarea", () => {
		component.setProps({
			input: {
				name: "description"
			}
		});
		const wrapper = findByTestAttr(component, "textarea");
		expect(wrapper).toHaveLength(1);
	});
	it("should render error div", () => {
		const wrapper = findByTestAttr(component, "error");
		expect(wrapper).toHaveLength(1);
	});
});

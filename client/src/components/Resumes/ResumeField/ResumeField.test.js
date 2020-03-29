import React from "react";
import { shallow } from "enzyme";
import ResumeField from "./ResumeField";
import { findByTestAttr, checkProps } from "../../../utils/helpers";

const setup = (props = {}) => shallow(<ResumeField {...props}></ResumeField>);

describe("<ResumeField/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			input: {
				name: "test"
			},
			label: "test",
			meta: {
				error: null,
				touched: null
			}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "resume-field");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(ResumeField, {
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
				name: "summary"
			}
		});
		const wrapper = findByTestAttr(component, "textarea");
		expect(wrapper).toHaveLength(1);
	});
	it("should render label tag", () => {
		const wrapper = findByTestAttr(component, "label");
		expect(wrapper).toHaveLength(1);
		expect(wrapper.text()).toBe("test");
	});
	it("should render error div", () => {
		const wrapper = findByTestAttr(component, "error");
		expect(wrapper).toHaveLength(1);
	});
});

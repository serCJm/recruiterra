import React, { useState as useStateMock } from "react";
import { shallow, mount } from "enzyme";
import ReadMoreLess from "./ReadMoreLess";
import { findByTestAttr, checkProps } from "../../../utils/helpers";

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: jest.fn()
}));

const setup = (props = {}) => {
	return shallow(<ReadMoreLess {...props}></ReadMoreLess>);
};

describe("<ReadMoreLess/>", () => {
	let component;
	beforeEach(() => {
		React.useState.mockClear();
		useStateMock.mockClear();
		const { useState } = jest.requireActual("react");
		useStateMock.mockImplementation(useState);
		component = setup({
			text: "test"
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "read-more-less");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(component);
	});
	it("should render passed in text", () => {
		const text = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
		component.setProps({ text });
		expect(component.text()).toBe(text);
	});
	it("should render passed in text", () => {
		const text = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
		component.setProps({ text, length: 20 });
		expect(component.text()).toBe(text);
	});
	it("should display ellipsis when text too long", () => {
		const text = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
		component.setProps({ text, length: 5 });
		const wrapper = findByTestAttr(component, "ellipsis");
		expect(wrapper.text()).toBe("...");
	});
	it("should display hidden text when text too long", () => {
		const text = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
		const length = 5;
		component.setProps({ text, length });
		const textArr = text.split(" ");
		const hiddenText = textArr.slice(length, textArr.length).join(" ");
		const wrapper = findByTestAttr(component, "hidden-text");
		expect(wrapper.text()).toBe(hiddenText);
	});
});

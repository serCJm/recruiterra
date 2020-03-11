import React from "react";
import { shallow } from "enzyme";
import GoogleBtn from "./GoogleBtn";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setUp = (props = {}) => {
	return shallow(<GoogleBtn {...props}></GoogleBtn>);
};

describe("<GoogleBtn/>", () => {
	it("should render without errors", () => {
		const component = setUp();
		const wrapper = findByTestAttr(component, "google-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning with expected props", () => {
		const component = setUp();
		const expectedProps = {
			type: "type",
			onClick: jest.fn(),
			children: component.children()
		};
		checkProps(GoogleBtn, expectedProps);
	});
	it("should render children prop", () => {
		const child = "Test text";
		const component = setUp({ children: child });
		expect(component.text()).toBe(child);
	});
	it("should call prop function when clicked", () => {
		const mock = jest.fn();
		const component = setUp({ onClick: mock });
		const btn = findByTestAttr(component, "google-btn");
		btn.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
	it("should render href attribute with type prop", () => {
		const type = "test";
		const href = `/auth/google?type=${type}`;
		const component = setUp({ type });
		const btn = findByTestAttr(component, "google-btn");
		expect(btn.prop("href")).toBe(href);
	});
});

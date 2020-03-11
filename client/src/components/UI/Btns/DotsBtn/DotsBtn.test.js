import React from "react";
import { shallow } from "enzyme";
import DotsBtn from "./DotsBtn";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setUp = (props = {}) => {
	return shallow(<DotsBtn {...props} />);
};

describe("<DotsBtn/>", () => {
	it("should render without error", () => {
		const component = setUp();
		const wrapper = findByTestAttr(component, "dots-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should call prop function when clicked", () => {
		const mockFn = jest.fn();
		const component = setUp({ onClick: mockFn });
		const button = findByTestAttr(component, "dots-btn");
		button.simulate("click");
		expect(mockFn).toHaveBeenCalled();
	});
	it("should not throw a warning with expected props", () => {
		const expectedProps = { onClick: jest.fn() };
		checkProps(DotsBtn, expectedProps);
	});
});

import React from "react";
import { shallow } from "enzyme";
import RegBtn from "./RegBtn";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setUp = (props = {}) => {
	return shallow(<RegBtn {...props}></RegBtn>);
};

describe("<RegBtn/>", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});
	it("should render without errors", () => {
		const btn = findByTestAttr(component, "reg-btn");
		expect(btn).toHaveLength(1);
	});
	it("should NOT throw a warning with expected props", () => {
		const expectedProps = {
			type: "some type",
			style: "some style",
			onClick: jest.fn()
		};
		checkProps(component, expectedProps);
	});
	it("should set button type", () => {
		const type = "some type";
		component.setProps({ type });
		const btn = findByTestAttr(component, "reg-btn");
		expect(btn.prop("type")).toBe(type);
	});
	it("should set one className from prop", () => {
		const style = "some style";
		component.setProps({ style });
		const btn = findByTestAttr(component, "reg-btn");
		expect(btn.prop("className").split(" ")).toHaveLength(1);
	});
	it("should call prop function on click", () => {
		const mock = jest.fn();
		component.setProps({ onClick: mock });
		const btn = findByTestAttr(component, "reg-btn");
		btn.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
});

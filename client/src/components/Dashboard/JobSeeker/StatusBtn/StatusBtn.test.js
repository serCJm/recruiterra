import React from "react";
import { shallow } from "enzyme";
import { StatusBtnUnconnected } from "./StatusBtn";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<StatusBtnUnconnected {...props}></StatusBtnUnconnected>);
};

describe("<StatusBtn/>", () => {
	let component;
	const mock = jest.fn();
	const id = "test";
	beforeEach(() => {
		component = setup({
			status: true,
			updateStatus: mock,
			id
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "status-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(StatusBtnUnconnected, {
			status: true,
			updateStatus: jest.fn(),
			id: "test"
		});
	});
	it("should render 'active' text", () => {
		const wrapper = findByTestAttr(component, "status-btn");
		expect(wrapper.text()).toBe("active");
	});
	it("should render 'inactive' text", () => {
		component.setProps({
			status: false
		});
		const wrapper = findByTestAttr(component, "status-btn");
		expect(wrapper.text()).toBe("inactive");
	});
	it("should should call prop on click", () => {
		const wrapper = findByTestAttr(component, "status-btn");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalledWith(id);
	});
});

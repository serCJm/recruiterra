import React from "react";
import { shallow } from "enzyme";
import LogIn from "./LogIn";
import { findByTestAttr } from "../../utils/helpers";

const setup = (props = {}) => shallow(<LogIn {...props}></LogIn>);

describe("<LogIn/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "login");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a <Spinner/>", () => {
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementationOnce(() => [true, jest.fn()]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "spinner");
		expect(wrapper).toHaveLength(1);
	});
	it("should update state on click", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementationOnce(() => [false, mock]);
		component.setProps({});
		const wrapper = findByTestAttr(component, "login-btn");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalled();
	});
});

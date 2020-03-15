import React, { useState as useStateMock } from "react";
import { shallow, mount } from "enzyme";
import DangerMsg from "./DangerMsg";
import classes from "./DangerMsg.module.css";
import { findByTestAttr, checkProps } from "../../../utils/helpers";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

const setUp = (props = {}) => {
	return shallow(<DangerMsg {...props}></DangerMsg>);
};

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: jest.fn()
}));

describe("<DangerMsg/>", () => {
	let component;
	beforeEach(() => {
		React.useState.mockClear();
		useStateMock.mockClear();
	});
	it("should render without errors", () => {
		useStateMock.mockImplementation(() => [true, jest.fn()]);
		component = setUp();
		const wrapper = findByTestAttr(component, "danger-msg");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT render", () => {
		useStateMock.mockImplementation(() => [false, jest.fn()]);
		component = setUp();
		const wrapper = findByTestAttr(component, "danger-msg");
		expect(wrapper).toHaveLength(0);
	});
	it("should NOT throw a warning with expected props", () => {
		const expectedProps = {
			duration: 10,
			onAnimDurationEnd: false,
			children: <div></div>
		};
		const component = setUp();
		checkProps(component, expectedProps);
	});
	it("should update sectionClass on click", () => {
		const mock = jest.fn();
		useStateMock.mockImplementation(() => ["class", mock]);
		component = setUp();
		const wrapper = findByTestAttr(component, "btn");
		wrapper.simulate("click");
		expect(mock).toHaveBeenCalledWith(classes.containerAnimated);
	});
	// it("should NOT render on click", () => {
	// 	const { useState } = jest.requireActual("react");
	// 	useStateMock.mockImplementation(useState);
	// 	// useEffect not called on shallow
	// 	component = mount(
	// 		<DangerMsg>
	// 			<div></div>
	// 		</DangerMsg>
	// 	);
	// 	const btn = findByTestAttr(component, "btn");
	// 	btn.simulate("click", { preventDefault() {} });
	// 	const wrapper = findByTestAttr(component, "danger-msg");
	// 	jest.advanceTimersByTime(1000);

	// 	expect(wrapper).toHaveLength(0);
	// });
	// it("should NOT render after duration", () => {
	// 	// useEffect not called on shallow
	// 	component = mount(<DangerMsg children={<div></div>}></DangerMsg>);
	// 	component.setProps({ duration: 2000 });
	// 	const wrapper = findByTestAttr(component, "danger-msg");
	// 	act(() => {
	// 		jest.advanceTimersByTime(3000);
	// 	});
	// 	expect(wrapper).toHaveLength(0);
	// });
});

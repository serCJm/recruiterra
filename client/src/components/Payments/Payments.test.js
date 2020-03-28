import React from "react";
import { shallow } from "enzyme";
import { PaymentsUnconnected } from "./Payments";
import { findByTestAttr } from "../../utils/helpers";

const setup = (props = {}) =>
	shallow(<PaymentsUnconnected {...props}></PaymentsUnconnected>);

describe("<PaymentsUnconnected/>", () => {
	let component;
	const mock = jest.fn();
	beforeEach(() => {
		component = setup({ handleStripeToken: mock });
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "payments");
		expect(wrapper).toHaveLength(1);
	});
	it("should render add payment button", () => {
		const wrapper = findByTestAttr(component, "payments-btn");
		expect(wrapper).toHaveLength(1);
	});
	it("should run callback prop", () => {
		const wrapper = findByTestAttr(component, "payments");
		wrapper.prop("token")();
		expect(mock).toHaveBeenCalled();
	});
});

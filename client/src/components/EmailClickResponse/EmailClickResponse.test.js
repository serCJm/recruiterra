import React from "react";
import { shallow } from "enzyme";
import EmailClickResponse from "./EmailClickResponse";
import { findByTestAttr, checkProps } from "../../utils/helpers";

const setup = (props = {}) =>
	shallow(<EmailClickResponse {...props}></EmailClickResponse>);

describe("<EmailClickResponse/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			match: {
				params: {
					choice: "apply"
				}
			}
		});
	});
	it("should without errors", () => {
		const wrapper = findByTestAttr(component, "email-click-response");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(EmailClickResponse, {
			match: {
				params: {
					choice: "apply"
				}
			}
		});
	});
	it("should display correct text when response is 'apply'", () => {
		const message =
			"Thank you for applying for this job. You will be contacted by the company if successful.";
		const wrapper = findByTestAttr(component, "message");
		expect(wrapper.render().text()).toBe(message);
	});
	it("should display correct text when response is declined", () => {
		const message =
			"Thank you for skipping. We hope next job suits you better.";
		component.setProps({
			match: {
				params: {
					choice: "decline"
				}
			}
		});
		const wrapper = findByTestAttr(component, "message");
		expect(wrapper.render().text()).toBe(message);
	});
});

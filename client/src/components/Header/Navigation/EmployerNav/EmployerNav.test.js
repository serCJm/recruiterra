import React from "react";
import { shallow } from "enzyme";
import EmployerNav from "./EmployerNav";
import classes from "./EmployerNav.module.css";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<EmployerNav {...props}></EmployerNav>);
};

describe("<EmployerNav/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			credits: 5
		});
	});
	it("should render credits item", () => {
		const wrapper = findByTestAttr(component, "credits");
		expect(wrapper).toHaveLength(1);
	});
	it("should render payments item", () => {
		const wrapper = findByTestAttr(component, "payments");
		expect(wrapper).toHaveLength(1);
	});
	it("should render applicants-link item", () => {
		const wrapper = findByTestAttr(component, "applicants-link");
		expect(wrapper).toHaveLength(1);
	});
	it("should render logout item", () => {
		const wrapper = findByTestAttr(component, "logout");
		expect(wrapper).toHaveLength(1);
	});
	it("should have correct logout link", () => {
		const wrapper = findByTestAttr(component, "logout");
		expect(wrapper.prop("href")).toBe("/api/logout");
	});
	it("should NOT throw a warning", () => {
		checkProps(EmployerNav, { credits: 5 });
	});
	it("should display correct credits", () => {
		const wrapper = findByTestAttr(component, "credits-number");
		expect(wrapper.text()).toBe("5");
	});
	it("should set success class with credits > 0", () => {
		const wrapper = findByTestAttr(component, "credits-number");
		expect(wrapper.hasClass(classes.creditsSuccess)).toBe(true);
	});
	it("should set danger class with credits = 0", () => {
		component.setProps({
			credits: 0
		});
		const wrapper = findByTestAttr(component, "credits-number");
		expect(wrapper.hasClass(classes.creditsDanger)).toBe(true);
	});
});
